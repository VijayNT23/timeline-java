import React, { useState, useEffect } from 'react';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend, 
  ArcElement, 
  PointElement, 
  LineElement 
} from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);


const wrapLabel = (label) => {
  if (typeof label !== 'string' || label.length <= 16) return label;
  const words = label.split(' ');
  const lines = [];
  let currentLine = '';

  words.forEach(word => {
    if ((currentLine + word).length > 16) {
      lines.push(currentLine.trim());
      currentLine = word + ' ';
    } else {
      currentLine += word + ' ';
    }
  });
  lines.push(currentLine.trim());
  return lines;
};

const tooltipConfig = {
  callbacks: {
    title: function(tooltipItems) {
      const item = tooltipItems[0];
      let label = item.chart.data.labels[item.dataIndex];
      return Array.isArray(label) ? label.join(' ') : label;
    }
  }
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { labels: { color: '#F8FAFC', font: { family: 'Inter' } } },
    tooltip: tooltipConfig
  },
  scales: {
    x: { ticks: { color: '#94A3B8' }, grid: { display: false } },
    y: { ticks: { color: '#94A3B8' }, grid: { color: 'rgba(148, 163, 184, 0.1)' } }
  }
};

// --- COMPONENTS ---

const InfographicView = ({ onStartQuiz }) => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <header className="relative py-28 px-6 text-center bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-orange-500/10 blur-[140px] rounded-full"></div>
        <div className="relative z-10">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-orange-500 uppercase bg-orange-500/10 border border-orange-500/20 rounded-full">
                1991 — Present Day
            </span>
            <h1 className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-violet-400 to-cyan-400 mb-8 uppercase tracking-tighter">
                JAVA REIGN
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
                Witness the transformation of <strong>Project Oak</strong> into the <strong>OpenJDK</strong> standard that runs 3 billion devices and virtually every major bank on Earth.
            </p>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-16 space-y-32">
        
        {/* The Timeline Section */}
        <div className="space-y-16">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-4xl font-bold text-white mb-6">The Road from Oak to OpenJDK</h2>
                <p className="text-slate-400">Java didn't start as a cloud giant. It was a "failed" experimental project for interactive televisions that accidentally found its home on the early web.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <div className="p-8 bg-slate-800 rounded-3xl border border-slate-700 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 text-4xl opacity-10 group-hover:opacity-20 transition-opacity">🌳</div>
                        <h4 className="text-orange-500 font-mono text-sm mb-2">1991 — THE OAK ERA</h4>
                        <h3 className="text-2xl font-bold text-white mb-3">Project Oak</h3>
                        <p className="text-slate-400 leading-relaxed text-sm">
                            James Gosling and the "Green Team" at Sun Microsystems built Oak for consumer electronics (like smart TVs). When the market failed to materialize, they saw the web's potential and pivoted.
                        </p>
                    </div>
                    <div className="p-8 bg-slate-800 rounded-3xl border border-slate-700 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 text-4xl opacity-10 group-hover:opacity-20 transition-opacity">🏢</div>
                        <h4 className="text-violet-500 font-mono text-sm mb-2">2000s — THE ENTERPRISE BOOM</h4>
                        <h3 className="text-2xl font-bold text-white mb-3">The Backbone of Finance</h3>
                        <p className="text-slate-400 leading-relaxed text-sm">
                            With J2EE, Java became the mandatory choice for global banks. Its focus on security, multithreading, and stability made it the only choice for systems where failure meant millions lost.
                        </p>
                    </div>
                </div>
                <div className="space-y-8">
                    <div className="p-8 bg-slate-800 rounded-3xl border border-slate-700 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 text-4xl opacity-10 group-hover:opacity-20 transition-opacity">☕</div>
                        <h4 className="text-cyan-500 font-mono text-sm mb-2">1995 — THE BIRTH</h4>
                        <h3 className="text-2xl font-bold text-white mb-3">Renaming to Java</h3>
                        <p className="text-slate-400 leading-relaxed text-sm">
                            Oak was already trademarked. Legend says the team chose "Java" at a coffee shop. They launched it with "Applets," bringing animation and interaction to static web browsers for the first time.
                        </p>
                    </div>
                    <div className="p-8 bg-slate-800 rounded-3xl border border-slate-700 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 text-4xl opacity-10 group-hover:opacity-20 transition-opacity">🌐</div>
                        <h4 className="text-emerald-500 font-mono text-sm mb-2">2020s — THE OPENJDK STANDARD</h4>
                        <h3 className="text-2xl font-bold text-white mb-3">Cloud Native Evolution</h3>
                        <p className="text-slate-400 leading-relaxed text-sm">
                            Oracle acquired Sun in 2010. Today, **OpenJDK** is the open-source heart of Java development. With a 6-month release cycle, Java is now as fast and lightweight as modern languages like Go or Python.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* WORA SECRET SECTION */}
        <div className="bg-slate-900/50 p-12 rounded-[3rem] border border-orange-500/20 shadow-inner relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4 italic uppercase">How It Conquered The World</h2>
            <h3 className="text-2xl font-bold text-orange-500">The "Write Once, Run Anywhere" Secret</h3>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              Before Java, code had to be re-written for every Operating System (Windows, Mac, Solaris). Java introduced the <strong>JVM (Java Virtual Machine)</strong>, a universal translator.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-8">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center gap-6 w-full max-w-4xl">
              <div className="flex-1 p-6 bg-slate-800 rounded-2xl border border-slate-700 text-center">
                <div className="text-xs text-orange-500 font-mono mb-2">SOURCE</div>
                <div className="text-xl font-bold">MyApp.java</div>
                <div className="text-xs text-slate-500 mt-1">Human Readable Code</div>
              </div>
              <div className="text-orange-500 text-3xl animate-bounce md:rotate-0 rotate-90">➜</div>
              <div className="flex-1 p-6 bg-slate-800 rounded-2xl border border-slate-700 text-center">
                <div className="text-xs text-violet-500 font-mono mb-2">COMPILER</div>
                <div className="text-xl font-bold italic">javac</div>
                <div className="text-xs text-slate-500 mt-1">Translation Phase</div>
              </div>
              <div className="text-orange-500 text-3xl animate-bounce md:rotate-0 rotate-90">➜</div>
              <div className="flex-1 p-6 bg-slate-800 rounded-2xl border border-slate-700 text-center">
                <div className="text-xs text-cyan-500 font-mono mb-2">BYTECODE</div>
                <div className="text-xl font-bold">MyApp.class</div>
                <div className="text-xs text-slate-500 mt-1">The Intermediate Logic</div>
              </div>
            </div>

            <div className="text-orange-500 text-4xl py-4 italic font-black">⬇ THE UNIVERSAL TRANSLATOR ⬇</div>

            {/* Step 2: The JVM Hub */}
            <div className="w-full max-w-2xl p-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl text-slate-900 text-center shadow-[0_0_60px_rgba(249,115,22,0.2)]">
                <h4 className="text-3xl font-black uppercase mb-2">JVM</h4>
                <p className="font-bold opacity-80 uppercase tracking-widest text-sm">Java Virtual Machine</p>
            </div>

            <div className="text-orange-500 text-3xl animate-pulse">⬇ RUNS ON ANY DEVICE ⬇</div>

            {/* Step 3: Deployment */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
              <div className="p-6 bg-slate-800 rounded-2xl border-t-4 border-cyan-400 text-center">
                <div className="text-3xl mb-2">💻</div>
                <div className="font-bold">Windows</div>
              </div>
              <div className="p-6 bg-slate-800 rounded-2xl border-t-4 border-slate-400 text-center">
                <div className="text-3xl mb-2">🍎</div>
                <div className="font-bold">Mac</div>
              </div>
              <div className="p-6 bg-slate-800 rounded-2xl border-t-4 border-orange-400 text-center">
                <div className="text-3xl mb-2">🐧</div>
                <div className="font-bold">Linux</div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Visuals */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-slate-800 p-8 rounded-3xl border border-slate-700 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-2">Platform Distribution</h3>
                <p className="text-slate-400 mb-8 text-sm">Java's influence isn't just servers; it's the primary engine for Android and high-scale data processing.</p>
                <div className="h-[350px] w-full">
                    <Bar 
                        data={{
                            labels: [wrapLabel('Finance & Banks'), wrapLabel('Android Apps'), wrapLabel('Server Side Cloud'), wrapLabel('Scientific Computing'), wrapLabel('Desktop Apps')],
                            datasets: [{
                                label: 'Global Usage Density (%)',
                                data: [88, 72, 94, 45, 12],
                                backgroundColor: ['#F97316', '#10B981', '#06B6D4', '#8B5CF6', '#475569'],
                                borderRadius: 12
                            }]
                        }}
                        options={chartOptions}
                    />
                </div>
            </div>
            <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-orange-500 mb-6 uppercase tracking-widest text-center">Core Philosophy</h3>
                <div className="space-y-8">
                    <div className="text-center">
                        <div className="text-xs text-slate-500 uppercase mb-1">The Slogan</div>
                        <div className="text-2xl font-black italic">"Write Once, Run Anywhere"</div>
                    </div>
                    <div className="text-center">
                        <div className="text-xs text-slate-500 uppercase mb-1">The Goal</div>
                        <div className="text-2xl font-black">Architecture Neutrality</div>
                    </div>
                    <div className="text-center">
                        <div className="text-xs text-slate-500 uppercase mb-1">The Tool</div>
                        <div className="text-2xl font-black text-cyan-400">The Virtual Machine</div>
                    </div>
                </div>
            </div>
        </div>

        {/* Influence Summary */}
        <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-6">What else did Java bring?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800">
                    <h4 className="text-white font-bold mb-2">Automated Memory Management</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">Before Java, developers had to manually free memory (leading to crashes). Java popularized the **Garbage Collector**, changing how we write software forever.</p>
                </div>
                <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800">
                    <h4 className="text-white font-bold mb-2">Standard Libraries</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">Java provided a massive "batteries-included" library for everything from Networking to UI, setting the standard for modern dev ecosystems.</p>
                </div>
                <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800">
                    <h4 className="text-white font-bold mb-2">Strong Type Safety</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">Java's strict rules prevented thousands of common runtime errors, making it the most reliable language for 24/7 mission-critical services.</p>
                </div>
                <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800">
                    <h4 className="text-white font-bold mb-2">Multithreading</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">Java was one of the first mainstream languages to build multi-threading directly into its syntax and library, enabling the modern concurrent web.</p>
                </div>
            </div>
        </div>

        {/* CTA Section */}
        <div className="text-center py-20 bg-gradient-to-r from-orange-600/10 to-violet-600/10 rounded-[3rem] border border-white/5">
            <h2 className="text-4xl font-bold text-white mb-6">Are you a Java Expert?</h2>
            <p className="text-slate-400 mb-10 max-w-xl mx-auto">
                Test your knowledge on the full history of Java, from its Oak origins to its current OpenJDK dominance.
            </p>
            <button 
                onClick={onStartQuiz}
                className="px-12 py-6 bg-orange-500 hover:bg-orange-600 text-white font-black text-xl rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-[0_0_50px_rgba(249,115,22,0.4)]"
            >
                START 10-QUESTION QUIZ
            </button>
        </div>
      </section>

      <footer className="py-12 text-center text-slate-600 border-t border-slate-900">
        <p className="font-mono text-xs uppercase tracking-widest text-slate-500">From 1991 Oak to 2024 OpenJDK</p>
        <p className="mt-2">Visualized for Tech Historians & Developers</p>
      </footer>
    </div>
  );
};

const QuizView = ({ onBack }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const questions = [
    {
      q: "What was Java's first official name when development started in 1991?",
      options: ["Star7", "C++ Plus", "Oak", "Green"],
      correct: 2
    },
    {
      q: "Why did the 'Green Team' originally build this language?",
      options: ["For Web Browsers", "For Smart TVs/Set-top boxes", "For High-Speed Trading", "For Operating Systems"],
      correct: 1
    },
    {
      q: "The slogan 'Write Once, Run Anywhere' refers to which core component?",
      options: ["The Garbage Collector", "The Just-In-Time Compiler", "The Java Virtual Machine (JVM)", "The Standard Library"],
      correct: 2
    },
    {
      q: "Which company acquired Sun Microsystems (and Java) in 2010?",
      options: ["Google", "Microsoft", "Oracle", "IBM"],
      correct: 2
    },
    {
      q: "What is the name of the open-source implementation of the Java Platform?",
      options: ["FreeJava", "OpenJDK", "Java-OS", "GNU-Java"],
      correct: 1
    },
    {
      q: "What major innovation did Java bring to memory management for mainstream developers?",
      options: ["Manual Allocation", "Pointers", "Automated Garbage Collection", "Reference Counting"],
      correct: 2
    },
    {
      q: "How often does Java now release a new major version?",
      options: ["Every 2 years", "Every 6 months", "Every year", "When features are ready"],
      correct: 1
    },
    {
      q: "In which industry is Java considered the 'backbone' and gold standard?",
      options: ["Gaming", "Video Editing", "Banking & Enterprise", "Hardware Drivers"],
      correct: 2
    },
    {
      q: "What was 'Duke' intended to be?",
      options: ["A programming mascot", "A handheld TV controller character", "A browser plugin", "A company logo"],
      correct: 1
    },
    {
      q: "Which mobile operating system uses Java (or Kotlin on JVM) as its primary language?",
      options: ["iOS", "Symbian", "Android", "Windows Mobile"],
      correct: 2
    }
  ];

  const handleAnswer = (idx) => {
    if (idx === questions[currentStep].correct) setScore(score + 1);
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setFinished(true);
    }
  };

  if (finished) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 animate-in zoom-in duration-500 bg-slate-950">
        <div className="max-w-md w-full bg-slate-900 p-12 rounded-[3rem] text-center border border-slate-800 shadow-2xl">
          <div className="text-7xl mb-6">✨</div>
          <h2 className="text-4xl font-black text-white mb-2">Finished!</h2>
          <p className="text-slate-400 text-lg mb-10">You're a Java Historian. <br/>Score: <span className="text-orange-500">{score} / 10</span></p>
          <div className="space-y-4">
            <button 
              onClick={() => { setFinished(false); setCurrentStep(0); setScore(0); }}
              className="w-full py-5 bg-orange-500 text-white font-black rounded-2xl shadow-lg shadow-orange-500/20"
            >
              RETRIALIZE
            </button>
            <button 
              onClick={onBack}
              className="w-full py-5 bg-slate-800 text-white font-bold rounded-2xl border border-slate-700 hover:bg-slate-700 transition"
            >
              RETURN TO HISTORY
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-slate-900 p-8 md:p-16 rounded-[3rem] shadow-2xl border border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-5 text-8xl font-black pointer-events-none">
            {currentStep + 1}
        </div>
        <div className="flex justify-between items-center mb-12 relative z-10">
            <button onClick={onBack} className="text-slate-500 hover:text-white transition font-mono text-sm uppercase">← Abort Quiz</button>
            <div className="h-2 w-32 bg-slate-800 rounded-full overflow-hidden">
                <div 
                    className="h-full bg-orange-500 transition-all duration-300" 
                    style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                ></div>
            </div>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 leading-tight relative z-10">
          {questions[currentStep].q}
        </h2>

        <div className="grid grid-cols-1 gap-4 relative z-10">
          {questions[currentStep].options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(i)}
              className="group text-left p-6 rounded-2xl bg-slate-800/40 border border-slate-700 hover:border-orange-500 hover:bg-slate-800/80 text-slate-200 transition-all"
            >
              <div className="flex items-center">
                <span className="flex-none w-10 h-10 rounded-xl bg-slate-900 text-center leading-10 font-bold mr-5 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                    {String.fromCharCode(65 + i)}
                </span>
                <span className="text-lg">{opt}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [view, setView] = useState('info');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-orange-500 selection:text-white font-sans antialiased">
      {view === 'info' ? (
        <InfographicView onStartQuiz={() => setView('quiz')} />
      ) : (
        <QuizView onBack={() => setView('info')} />
      )}
    </div>
  );
}