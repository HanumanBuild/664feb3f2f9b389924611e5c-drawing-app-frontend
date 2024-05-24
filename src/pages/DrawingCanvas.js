import React, { useRef, useEffect } from 'react';

function DrawingCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let drawing = false;

    const startDrawing = ({ nativeEvent }) => {
      const { offsetX, offsetY } = nativeEvent;
      context.beginPath();
      context.moveTo(offsetX, offsetY);
      drawing = true;
    };

    const draw = ({ nativeEvent }) => {
      if (!drawing) return;
      const { offsetX, offsetY } = nativeEvent;
      context.lineTo(offsetX, offsetY);
      context.stroke();
    };

    const stopDrawing = () => {
      context.closePath();
      drawing = false;
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
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl mb-4">Drawing Canvas</h2>
      <canvas ref={canvasRef} width={800} height={600} className="border border-gray-300" />
    </div>
  );
}

export default DrawingCanvas;