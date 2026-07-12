"use client";
import React, { useState } from 'react';

// Hardcoded view feeding off our mock design schema values
const MOCK_DATA = {
  courseName: "Introduction to Robotics & Mechanics",
  color: "#C3B1E1", // Soft Pastel Purple
  assignmentTitle: "Chassis Design Stability Report",
  tasks: [
    { id: 1, text: "Sketch chassis geometry & calculate baseline Center of Mass" },
    { id: 2, text: "Draft stability polygon specs for rear caster wheel layout" },
    { id: 3, text: "Write Introduction and Methodology sections" },
    { id: 4, text: "Review simulation test plots and proofread final report" }
  ]
};

export default function HorizonDashboard() {
  const [completedTasks, setCompletedTasks] = useState<number[]>([]);

  const toggleTask = (id: number) => {
    setCompletedTasks(prev => 
      prev.includes(id) ? prev.filter(taskId => taskId !== id) : [...prev, id]
    );
  };

  return (
    <main className="min-h-screen bg-[#F9F9FB] text-[#2D3142] font-sans antialiased flex flex-col justify-between p-6 md:p-12">
      {/* Upper Navigation / App Title */}
      <header className="max-w-3xl w-full mx-auto flex justify-between items-center mb-8">
        <h1 className="text-xl font-bold tracking-tight text-[#4F5D75]">Aether .</h1>
        <span className="text-xs font-semibold bg-[#EAECEF] px-3 py-1 rounded-full text-[#7A869A]">
          Today's Horizon
        </span>
      </header>

      {/* Main Micro-task Focus Cluster */}
      <section className="max-w-xl w-full mx-auto bg-white rounded-2xl shadow-sm border border-[#EBEFF5] p-8 md:p-10 my-auto">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span 
              className="w-3 h-3 rounded-full inline-block" 
              style={{ backgroundColor: MOCK_DATA.color }}
            />
            <h2 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
              {MOCK_DATA.courseName}
            </h2>
          </div>
          <h3 className="text-lg font-semibold text-gray-800">
            {MOCK_DATA.assignmentTitle}
          </h3>
        </div>

        <hr className="border-gray-100 my-4" />

        {/* Task List */}
        <div className="space-y-4">
          {MOCK_DATA.tasks.map((task) => {
            const isDone = completedTasks.includes(task.id);
            return (
              <div 
                key={task.id}
                onClick={() => toggleTask(task.id)}
                className={`flex items-start gap-4 p-4 rounded-xl cursor-pointer transition-all duration-200 border ${
                  isDone 
                    ? 'bg-gray-50 border-gray-100 text-gray-400' 
                    : 'bg-white border-gray-200 shadow-sm hover:border-purple-300'
                }`}
              >
                <div className={`w-5 h-5 rounded-full border mt-0.5 flex items-center justify-center transition-all ${
                  isDone ? 'bg-purple-500 border-purple-500' : 'border-gray-300'
                }`}>
                  {isDone && (
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <p className={`text-sm leading-relaxed font-medium ${isDone ? 'line-through' : ''}`}>
                  {task.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Anti-Anxiety Panic Button Footer Interaction */}
      <footer className="max-w-3xl w-full mx-auto text-center mt-8">
        <button 
          onClick={() => alert("Take a breath. Your schedule has safely smoothed forward. No penalties.")}
          className="px-5 py-2.5 bg-gray-100 hover:bg-red-50 text-gray-500 hover:text-red-500 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 shadow-sm"
        >
          🚨 Overwhelmed? Recalibrate Schedule
        </button>
      </footer>
    </main>
  );
}