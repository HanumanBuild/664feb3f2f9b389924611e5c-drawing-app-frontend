import React, { useRef, useEffect, useState } from 'react';
import axiosInstance from '../utils/axiosInstance';

function DrawingCanvas() {
  const canvasRef = useRef(null);
  const [drawing, setDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const startDrawing = ({ nativeEvent }) => {
      const { offsetX, offsetY } = nativeEvent;
      context.beginPath();
      context.moveTo(offsetX, offsetY);
      setDrawing(true);
    };

    const draw = ({ nativeEvent }) => {
      if (!drawing) return;
      const { offsetX, offsetY } = nativeEvent;
      context.lineTo(offsetX, offsetY);
      context.stroke();
    };

    const stopDrawing = () => {
      context.closePath();
      setDrawing(false);
    };

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    return () => {
      canvas.removeEventListener('mousedown', startDrawing);
      canvas.removeEventListener('mousemove', draw);
      canvas.removeEventListener('mouseup', stopDrawing);
      canvas.removeEventListener('mouseout', stopDrawing);
    };
  }, [drawing]);

  const saveDrawing = async () => {
    const canvas = canvasRef.current;
    const imageData = canvas.toDataURL('image/png');
    try {
      const token = localStorage.getItem('token');
      await axiosInstance.post('/api/drawings', { imageData }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      alert('Drawing saved successfully');
    } catch (error) {
      alert('Error saving drawing');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl mb-4">Drawing Canvas</h2>
      <canvas ref={canvasRef} width={800} height={600} className="border border-gray-300" />
      <button onClick={saveDrawing} className="bg-blue-500 text-white p-2 rounded mt-4">Save Drawing</button>
    </div>
  );
}

export default DrawingCanvas;