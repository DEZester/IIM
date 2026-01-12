import Scene from '@/app/components/Scene';

export default function Home() {
  return (
    // Убираем items-center и p-8, чтобы не центрировать всё в узкую колонку
    <main className="flex h-screen flex-col bg-slate-900">
      {/* Шапка (теперь она прижата к краям, но с внутренними отступами) */}
      <header className="z-10 w-full p-6 border-b border-slate-800">
        <h1 className="text-2xl font-bold text-slate-100 font-mono">
          IIM // Interactive Industrial Modeler
        </h1>
      </header>

      {/* Контейнер для сцены — убираем max-w-5xl и flex-1, чтобы занял всё место */}
      <div className="flex-1 w-full relative">
        <Scene />
      </div>
    </main>
  );
}
