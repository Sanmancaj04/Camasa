'use client';

import { useEffect, useState } from 'react';
import {
  AlertTriangle,
  BarChart3,
  BookOpen,
  Check,
  ChevronRight,
  CircleCheck,
  Download,
  Flame,
  Headphones,
  Home,
  Languages,
  Library,
  LockKeyhole,
  Medal,
  PlayCircle,
  RefreshCw,
  Settings,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Trophy,
  UserRound,
  Volume2,
  XCircle,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import {
  englishCurriculum,
  frenchCurriculum,
  japaneseCurriculum,
  portugueseCurriculum,
  russianCurriculum,
  sharedExercisePrinciples,
} from '@/lib/curriculum';
import {
  type AuditLanguage,
  auditAllCourses,
  type CourseAudit,
} from '@/lib/course-audit';

type View = 'learn' | 'progress' | 'library' | 'quality' | 'profiles';
type ProfileId = 'diana' | 'santiago';

const profiles = {
  diana: {
    name: 'Diana',
    initial: 'D',
    course: 'Inglés',
    level: 'A1 → B1',
    streak: 0,
    xp: 0,
    color: 'green',
  },
  santiago: {
    name: 'Santiago',
    initial: 'S',
    course: 'Japonés',
    level: 'Desde cero → B2',
    streak: 0,
    xp: 0,
    color: 'salmon',
  },
} as const;

const nav = [
  { id: 'learn' as const, icon: Home, label: 'Aprender' },
  { id: 'progress' as const, icon: Trophy, label: 'Progreso' },
  { id: 'library' as const, icon: Library, label: 'Biblioteca' },
  { id: 'quality' as const, icon: ShieldCheck, label: 'Calidad' },
  { id: 'profiles' as const, icon: UserRound, label: 'Perfiles' },
];

const englishLessons = [
  { icon: Volume2, label: 'Saludos y presentaciones', state: 'active', unitId: 'en-a1-01' },
  { icon: Check, label: 'Tu rutina diaria', state: 'next', unitId: 'en-a1-02' },
  {
    icon: Headphones,
    label: 'Escucha: planes del fin de semana',
    state: 'locked',
    unitId: 'en-a1-03',
  },
  { icon: BookOpen, label: 'Pasado simple', state: 'locked', unitId: 'en-a1-04' },
  { icon: Star, label: 'Repaso de la unidad', state: 'locked', unitId: 'en-a1-05' },
];

const japaneseLessons = [
  { icon: Check, label: 'Los sonidos del japonés', state: 'done', unitId: 'ja-01' },
  { icon: Languages, label: 'Hiragana: あ い う え お', state: 'active', unitId: 'ja-02' },
  { icon: Volume2, label: 'Primeros saludos', state: 'next', unitId: 'ja-02' },
  { icon: BookOpen, label: 'Hiragana: か き く け こ', state: 'locked', unitId: 'ja-03' },
  { icon: Star, label: 'Repaso de kana', state: 'locked', unitId: 'ja-04' },
];

const playableUnitIds = new Set([
  'en-a1-01',
  'en-a1-02',
  'en-02',
  'en-a1-03',
  'en-a1-04',
  'en-a1-05',
  'en-a1-06',
  'en-a1-07',
  'en-a1-08',
  'en-01',
  'en-03',
  'en-04',
  'en-05',
  'en-06',
  'en-07',
  'en-08',
  'en-09',
  'en-10',
  'en-11',
  'en-12',
  'en-13',
  'en-14',
  'en-15',
  'en-16',
  'en-17',
  'en-18',
  'en-19',
  'en-20',
  'en-21',
  'en-22',
  'en-23',
  'en-24',
  'ja-01',
  'ja-02',
  'ja-03',
  'ja-04',
  'ja-05',
  'ja-06',
  'ja-07',
  'ja-08',
  'ja-09',
  'ja-10',
  'ja-11',
  'ja-12',
  'ja-13',
  'ja-14',
  'ja-15',
  'ja-16',
  'ja-17',
  'ja-18',
  'ja-19',
  'ja-20',
  'ja-21',
  'ja-22',
  'ja-23',
  'ja-24',
  'ja-25',
  'ja-26',
  'ja-27',
  'ja-28',
  'ja-29',
  'ja-30',
  'ja-31',
  'ja-32',
  'ja-33',
  'ja-34',
  'ja-35',
  'ja-36',
  'fr-01',
  'pt-01',
  'pt-02',
  'pt-03',
  'pt-04',
  'pt-05',
  'pt-06',
  'pt-07',
  'pt-08',
  'pt-09',
  'pt-10',
  'pt-11',
  'pt-12',
  'pt-13',
  'pt-14',
  'pt-15',
  'pt-16',
  'pt-17',
  'pt-18',
  'pt-19',
  'pt-20',
  'pt-21',
  'pt-22',
  'pt-23',
  'pt-24',
  'pt-25',
  'pt-26',
  'pt-27',
  'pt-28',
  'pt-29',
  'pt-30',
  'pt-31',
  'pt-32',
  'ru-01',
  ...Array.from(
    { length: 35 },
    (_, index) => `ru-${String(index + 2).padStart(2, '0')}`,
  ),
]);

export default function HomePage() {
  const [view, setView] = useState<View>('learn');
  const [profileId, setProfileId] = useState<ProfileId>('diana');
  const profile = profiles[profileId];

  useEffect(() => {
    const saved = window.localStorage.getItem('camasa-profile');
    // Reinicio editorial: ambos perfiles vuelven a empezar sin arrastrar
    // índices ni marcas de pruebas anteriores.
    if (
      window.localStorage.getItem('camasa-course-reset-v2') !== '1'
    ) {
      for (const key of Object.keys(window.localStorage)) {
        if (/^camasa-(en|ja|fr|ru)/.test(key))
          window.localStorage.removeItem(key);
      }
      window.localStorage.setItem('camasa-course-reset-v2', '1');
    }
    // The selected local profile is client-only state.
    // oxlint-disable-next-line react-compiler/react-compiler
    if (saved === 'diana' || saved === 'santiago') setProfileId(saved);
  }, []);

  function chooseProfile(id: ProfileId) {
    setProfileId(id);
    setView('learn');
    window.localStorage.setItem('camasa-profile', id);
  }

  return (
    <main className="min-h-screen bg-[var(--canvas)] text-foreground">
      <header className="sticky top-0 z-20 border-b border-[var(--line)] bg-[#f8e7de]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[1180px] items-center justify-between px-4 sm:px-6">
          <button
            onClick={() => setView('learn')}
            className="flex items-center gap-3 text-left"
          >
            <span className="grid size-10 place-items-center rounded-[14px] bg-primary text-white shadow-[0_5px_0_var(--primary-shadow)]">
              <Languages className="size-5" strokeWidth={2.5} />
            </span>
            <span>
              <span className="block font-heading text-lg font-extrabold leading-none tracking-[-0.04em]">
                Camasa
              </span>
              <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                Aprende a tu ritmo
              </span>
            </span>
          </button>
          <div className="flex items-center gap-2 sm:gap-5">
            <div className="hidden items-center gap-2 text-sm font-bold text-[#c86b16] sm:flex">
              <Flame className="size-5 fill-[var(--orange)] text-[var(--orange)]" />
              <span>{profile.streak} días</span>
            </div>
            <button
              onClick={() => setView('profiles')}
              className="flex items-center gap-2 rounded-full border border-[var(--line)] bg-card px-2 py-1.5 shadow-sm transition hover:-translate-y-0.5"
            >
              <span
                className={`grid size-7 place-items-center rounded-full text-xs font-extrabold ${profileId === 'diana' ? 'bg-[var(--primary-soft)] text-primary' : 'bg-[var(--salmon-soft)] text-[#a94f48]'}`}
              >
                {profile.initial}
              </span>
              <span className="hidden pr-1 text-sm font-bold sm:block">
                {profile.name}
              </span>
              <ChevronRight className="size-3.5 text-muted-foreground" />
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-8 px-4 py-7 sm:px-6 lg:grid-cols-[185px_minmax(0,1fr)_285px]">
        <aside className="hidden lg:block">
          <Nav view={view} onChange={setView} />
        </aside>

        <section className="min-w-0 lg:col-span-2">
          {view === 'learn' && (
            <LearnView
              profileId={profileId}
              onProfiles={() => setView('profiles')}
            />
          )}
          {view === 'progress' && <ProgressView profileId={profileId} />}
          {view === 'library' && (
            <LibraryView
              profileId={profileId}
              onLearn={() => setView('learn')}
            />
          )}
          {view === 'quality' && <QualityView />}
          {view === 'profiles' && (
            <ProfilesView active={profileId} onChoose={chooseProfile} />
          )}
        </section>
      </div>

      <nav
        className="fixed inset-x-0 bottom-0 z-30 flex h-[68px] items-center justify-around border-t border-[var(--line)] bg-[#fff9f3]/95 px-3 backdrop-blur-lg lg:hidden"
        aria-label="Navegación móvil"
      >
        {nav.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => setView(id)}
            className={`flex min-w-16 flex-col items-center gap-1 text-[10px] font-extrabold ${view === id ? 'text-primary' : 'text-muted-foreground'}`}
          >
            <Icon className="size-5" strokeWidth={view === id ? 2.8 : 2} />
            {label}
          </button>
        ))}
      </nav>
    </main>
  );
}

function Nav({
  view,
  onChange,
}: {
  view: View;
  onChange: (view: View) => void;
}) {
  return (
    <nav className="sticky top-24 space-y-2" aria-label="Navegación principal">
      {nav.map(({ id, icon: Icon, label }) => (
        <button
          key={id}
          onClick={() => onChange(id)}
          className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold transition ${view === id ? 'bg-[var(--primary-soft)] text-primary' : 'text-muted-foreground hover:bg-[var(--surface)] hover:text-foreground'}`}
        >
          <Icon className="size-5" strokeWidth={view === id ? 2.7 : 2} />
          {label}
        </button>
      ))}
      <button className="mt-6 flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold text-muted-foreground hover:bg-[var(--surface)]">
        <Settings className="size-5" /> Configuración
      </button>
    </nav>
  );
}

function LearnView({
  profileId,
  onProfiles,
}: {
  profileId: ProfileId;
  onProfiles: () => void;
}) {
  const isDiana = profileId === 'diana';
  const profile = profiles[profileId];
  const baseLessons = isDiana ? englishLessons : japaneseLessons;
  const [completedUnits, setCompletedUnits] = useState<string[]>([]);
  useEffect(() => {
    const prefix = isDiana ? 'en-' : 'ja-';
    setCompletedUnits(
      baseLessons
        .map((lesson) => lesson.unitId)
        .filter(
          (unitId): unitId is string =>
            Boolean(unitId) &&
            window.localStorage.getItem(`camasa-${unitId}-model-lesson`) ===
              'complete',
        )
        .filter((unitId) => unitId.startsWith(prefix)),
    );
  }, [isDiana, baseLessons]);
  const lessons = baseLessons.map((lesson, index) => {
    const completed = Boolean(
      lesson.unitId && completedUnits.includes(lesson.unitId),
    );
    const previousCompleted =
      index === 0 ||
      Boolean(
        baseLessons[index - 1]?.unitId &&
          completedUnits.includes(baseLessons[index - 1].unitId as string),
      );
    return {
      ...lesson,
      state: completed ? 'done' : previousCompleted ? 'active' : 'locked',
    };
  });
  const routeProgress = Math.round(
    (completedUnits.length / baseLessons.length) * 100,
  );
  const content = isDiana
    ? {
        unit: 'Unidad 1 · Primeros pasos',
        title: 'Saludos y presentaciones',
        description:
          'Presenta tu nombre, país e idioma y practica saludos apropiados en situaciones cotidianas.',
        path: 'Unidad 1 de 32 · Primeros pasos',
        time: '10–12 min · 8 ejercicios',
      }
    : {
        unit: 'Unidad 1 · Primeros pasos',
        title: 'Hiragana: las vocales',
        description:
          'Reconoce, pronuncia y escribe tus primeros cinco caracteres: あ、い、う、え、お.',
        path: 'Unidad 1 de 36 · Sistema de escritura',
        time: '10–12 min · 8 ejercicios',
      };

  function startLesson(unitId?: string) {
    window.localStorage.setItem('camasa-profile', profileId);
    const course = isDiana ? 'en' : 'ja';
    window.location.href = unitId
      ? `/lesson?course=${course}&unit=${unitId}`
      : `/lesson?course=${course}`;
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_285px]">
      <div className="min-w-0">
        <div className="mb-7 flex items-end justify-between gap-4">
          <div>
            <p className="mb-1 text-xs font-extrabold uppercase tracking-[0.13em] text-primary">
              {profile.course} · {profile.level}
            </p>
            <h1 className="font-heading text-3xl font-black tracking-[-0.045em] sm:text-4xl">
              ¡Hola, {profile.name}!
            </h1>
            <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
              Tu siguiente práctica está lista. Continúa exactamente donde te
              quedaste.
            </p>
          </div>
          <Button
            onClick={onProfiles}
            variant="outline"
            className="hidden h-10 rounded-xl border-[var(--line)] bg-[var(--surface)] px-4 font-bold shadow-sm sm:inline-flex"
          >
            Cambiar perfil <ChevronRight />
          </Button>
        </div>

        <Card className="relative mb-7 overflow-hidden border-0 bg-[linear-gradient(135deg,#236f59_0%,#2d9d78_48%,#ef855c_100%)] py-0 text-white ring-0 shadow-[0_18px_46px_rgba(93,89,56,0.24)]">
          <div className="absolute -right-10 -top-16 size-52 rounded-full bg-[var(--salmon)]/35" />
          <div className="absolute -bottom-24 right-24 size-48 rounded-full bg-[var(--orange)]/45 blur-xl" />
          <CardContent className="relative grid gap-7 p-6 sm:grid-cols-[1fr_auto] sm:p-8">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#fff1e5]/20 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.12em] text-white">
                <Sparkles className="size-3.5" /> {content.unit}
              </div>
              <h2 className="font-heading text-2xl font-black tracking-[-0.035em]">
                {content.title}
              </h2>
              <p className="mt-2 max-w-md text-sm leading-6 text-white/85">
                {content.description}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Button
                  onClick={() => startLesson(isDiana ? 'en-a1-01' : 'ja-01')}
                  className="h-11 rounded-xl bg-[var(--orange)] px-5 text-sm font-extrabold text-white shadow-[0_4px_0_#b96321] hover:bg-[#ee8f32]"
                >
                  Continuar lección <ChevronRight strokeWidth={3} />
                </Button>
                <span className="text-xs font-bold text-white/80">
                  {content.time}
                </span>
              </div>
            </div>
            <div className="grid size-28 place-items-center self-center rounded-[30px] border border-white/25 bg-[#fff7ef]/15">
              <div className="grid size-20 place-items-center rounded-full border-[7px] border-white/25 border-t-[#ffd0c5] text-xl font-black">
                {routeProgress}%
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mb-5 flex items-center justify-between">
          <div>
            <h2 className="font-heading text-xl font-black">
              Ruta de aprendizaje
            </h2>
            <p className="mt-1 text-xs text-muted-foreground">{content.path}</p>
          </div>
          <span className="rounded-full bg-[var(--surface)] px-3 py-1.5 text-xs font-extrabold text-muted-foreground shadow-sm ring-1 ring-[var(--line)]">
            {completedUnits.length} / {baseLessons.length}
          </span>
        </div>
        <div className="relative space-y-3 before:absolute before:bottom-7 before:left-[27px] before:top-7 before:w-px before:bg-[var(--line)]">
          {lessons.map(({ icon: Icon, label, state, unitId }, index) => (
            <button
              key={label}
              onClick={() => state !== 'locked' && startLesson(unitId)}
              disabled={state === 'locked'}
              className={`relative flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition ${state === 'active' ? 'border-primary/30 bg-[var(--surface)] shadow-[0_10px_28px_rgba(45,157,120,0.13)]' : 'border-[var(--line)] bg-[#fff9f3]/75 hover:bg-[var(--surface)]'} disabled:cursor-default disabled:opacity-55`}
            >
              <span
                className={`z-10 grid size-11 shrink-0 place-items-center rounded-[15px] ${state === 'done' ? 'bg-primary text-white' : state === 'active' ? 'bg-[var(--primary-soft)] text-primary ring-2 ring-primary/25' : state === 'locked' ? 'bg-[#eee6e1] text-[#9b908a]' : 'bg-[var(--salmon-soft)] text-[#b9534b]'}`}
              >
                {state === 'locked' ? (
                  <LockKeyhole className="size-4" />
                ) : (
                  <Icon className="size-5" strokeWidth={2.5} />
                )}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-extrabold">{label}</span>
                <span className="mt-1 block text-xs text-muted-foreground">
                  {state === 'done'
                    ? 'Completada · +20 XP'
                    : state === 'active'
                      ? 'En progreso · 40%'
                      : state === 'locked'
                        ? 'Completa la lección anterior'
                        : '6 minutos'}
                </span>
              </span>
              <span className="text-xs font-black text-muted-foreground">
                {index + 1}
              </span>
            </button>
          ))}
        </div>
      </div>
      <Sidebar profileId={profileId} onSwitch={onProfiles} />
    </div>
  );
}

function Sidebar({
  profileId,
  onSwitch,
}: {
  profileId: ProfileId;
  onSwitch: () => void;
}) {
  const profile = profiles[profileId];
  const other = profileId === 'diana' ? profiles.santiago : profiles.diana;
  return (
    <aside className="space-y-5">
      <Card className="border-0 bg-card shadow-sm ring-1 ring-[var(--line)]">
        <CardContent>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-heading font-black">Meta semanal</h2>
            <span className="text-xs font-extrabold text-primary">
              0 de 5 días
            </span>
          </div>
          <div className="mb-3 flex justify-between gap-1.5">
            {['L', 'M', 'X', 'J', 'V', 'S', 'D'].map((day, i) => (
              <span
                key={day}
                className={`grid size-7 place-items-center rounded-full text-[10px] font-black ${i < 3 ? 'bg-primary text-white' : 'bg-[#eee5df] text-muted-foreground'}`}
              >
                {i < 3 ? <Check className="size-3.5" /> : day}
              </span>
            ))}
          </div>
          <p className="text-xs leading-5 text-muted-foreground">
            Completa tu primera práctica para comenzar tu racha.
          </p>
        </CardContent>
      </Card>
      <Card className="border-0 bg-[var(--orange-soft)] shadow-sm ring-1 ring-[#f1d2a9]">
        <CardContent>
          <div className="mb-3 flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-2xl bg-[var(--orange)] text-white">
              <Star className="size-5 fill-current" />
            </span>
            <div>
              <p className="font-heading font-black">{profile.xp} XP</p>
              <p className="text-[11px] font-bold text-[#9b672e]">
                Progreso de {profile.name}
              </p>
            </div>
          </div>
          <Progress
            value={profileId === 'diana' ? 0 : 28}
            className="[&_[data-slot=progress-indicator]]:bg-[var(--orange)] [&_[data-slot=progress-track]]:h-2 [&_[data-slot=progress-track]]:bg-[#efd8bd]"
          />
        </CardContent>
      </Card>
      <button
        onClick={onSwitch}
        className="flex w-full items-center gap-3 rounded-2xl border border-[var(--line)] bg-card/75 p-4 text-left hover:bg-card"
      >
        <span className="grid size-10 place-items-center rounded-2xl bg-[var(--salmon-soft)] font-black text-[#b9534b]">
          {other.initial}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-sm font-extrabold">
            Cambiar a {other.name}
          </span>
          <span className="block text-xs text-muted-foreground">
            {other.course} · {other.level}
          </span>
        </span>
        <ChevronRight className="size-4" />
      </button>
    </aside>
  );
}

function PageIntro({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="mb-7">
      <p className="text-xs font-extrabold uppercase tracking-[0.13em] text-primary">
        {eyebrow}
      </p>
      <h1 className="mt-1 font-heading text-3xl font-black tracking-[-0.045em] sm:text-4xl">
        {title}
      </h1>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
        {text}
      </p>
    </div>
  );
}

function ProgressView({ profileId }: { profileId: ProfileId }) {
  const profile = profiles[profileId];
  const stats =
    profileId === 'diana'
      ? [
          ['0', 'XP totales'],
          ['0', 'Días de racha'],
          ['0', 'Lecciones'],
          ['—', 'Precisión'],
        ]
      : [
          ['0', 'XP totales'],
          ['0', 'Días de racha'],
          ['0', 'Lecciones'],
          ['—', 'Precisión'],
        ];
  return (
    <>
      <PageIntro
        eyebrow={`${profile.course} · ${profile.name}`}
        title="Tu progreso"
        text="Aquí puedes ver tu constancia, resultados y habilidades que necesitan más práctica."
      />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map(([value, label], i) => (
          <Card
            key={label}
            className="border-0 bg-card shadow-sm ring-1 ring-[var(--line)]"
          >
            <CardContent>
              <span
                className={`mb-4 grid size-10 place-items-center rounded-2xl ${i % 2 ? 'bg-[var(--orange-soft)] text-[#b5641a]' : 'bg-[var(--primary-soft)] text-primary'}`}
              >
                {i === 0 ? (
                  <Star className="size-5" />
                ) : i === 1 ? (
                  <Flame className="size-5" />
                ) : i === 2 ? (
                  <BookOpen className="size-5" />
                ) : (
                  <Target className="size-5" />
                )}
              </span>
              <p className="text-3xl font-black">{value}</p>
              <p className="mt-1 text-xs font-bold text-muted-foreground">
                {label}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-5 grid gap-5 lg:grid-cols-2">
        <Card className="border-0 bg-card shadow-sm ring-1 ring-[var(--line)]">
          <CardContent>
            <h2 className="font-heading text-lg font-black">
              Actividad semanal
            </h2>
            <div className="mt-6 flex h-40 items-end justify-between gap-3">
              {[35, 62, 48, 78, 44, 20, 12].map((height, i) => (
                <div
                  key={i}
                  className="flex flex-1 flex-col items-center gap-2"
                >
                  <div
                    className={`w-full rounded-t-xl ${i < 4 ? 'bg-primary' : 'bg-[#eaded7]'}`}
                    style={{ height: `${height}%` }}
                  />
                  <span className="text-[10px] font-bold text-muted-foreground">
                    {['L', 'M', 'X', 'J', 'V', 'S', 'D'][i]}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 bg-card shadow-sm ring-1 ring-[var(--line)]">
          <CardContent>
            <h2 className="font-heading text-lg font-black">Habilidades</h2>
            {[
              ['Vocabulario', 78],
              ['Comprensión', 65],
              ['Gramática', 54],
              ['Pronunciación', 42],
            ].map(([label, value]) => (
              <div key={String(label)} className="mt-5">
                <div className="mb-2 flex justify-between text-xs font-bold">
                  <span>{label}</span>
                  <span>{value}%</span>
                </div>
                <Progress
                  value={Number(value)}
                  className="[&_[data-slot=progress-track]]:h-2 [&_[data-slot=progress-indicator]]:bg-[var(--salmon)]"
                />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </>
  );
}

function LibraryView({
  profileId,
  onLearn,
}: {
  profileId: ProfileId;
  onLearn: () => void;
}) {
  type CourseId = 'english' | 'japanese' | 'french' | 'russian' | 'portuguese';
  const assignedCourse: CourseId =
    profileId === 'diana' ? 'english' : 'japanese';
  const [selectedCourse, setSelectedCourse] =
    useState<CourseId>(assignedCourse);
  const curriculumMap = {
    english: englishCurriculum,
    japanese: japaneseCurriculum,
    french: frenchCurriculum,
    russian: russianCurriculum,
    portuguese: portugueseCurriculum,
  };
  const routeLanguageMap: Record<CourseId, AuditLanguage> = {
    english: 'en',
    japanese: 'ja',
    french: 'fr',
    russian: 'ru',
    portuguese: 'pt',
  };
  const titleMap = {
    english: 'Inglés A1 → B2',
    japanese: 'Japonés desde cero → B2',
    french: 'Francés A1 → B2',
    russian: 'Ruso desde cero → B2',
    portuguese: 'Portugués A1 → B2',
  };
  const curriculum = curriculumMap[selectedCourse];
  const activeCourse = titleMap[selectedCourse];
  const courseCards = [
    {
      id: 'english' as const,
      title: 'Inglés A1 → B2',
      text: '32 unidades · conversación, gramática, escucha y mediación',
      icon: 'EN',
    },
    {
      id: 'japanese' as const,
      title: 'Japonés desde cero → B2',
      text: '36 unidades · kana, kanji, comunicación y registro',
      icon: 'あ',
    },
    {
      id: 'french' as const,
      title: 'Francés A1 → B2',
      text: '32 unidades · fonética, interacción, cultura y mediación',
      icon: 'FR',
    },
    {
      id: 'russian' as const,
      title: 'Ruso desde cero → B2',
      text: '36 unidades · cirílico, casos, aspecto y comunicación',
      icon: 'Я',
    },
    {
      id: 'portuguese' as const,
      title: 'Portugués A1 → B2',
      text: '32 unidades · interacción, argumentación, mediación y proyectos',
      icon: 'PT',
    },
  ];
  return (
    <>
      <PageIntro
        eyebrow="Contenido local"
        title="Biblioteca"
        text="Consulta tus cursos, objetivos y materiales. Todo permanece disponible sin conexión."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {courseCards.map((course, i) => {
          const assigned = course.id === assignedCourse;
          const selected = course.id === selectedCourse;
          return (
            <Card
              key={course.title}
              className={`border-0 bg-card shadow-sm ring-1 ${selected ? 'ring-2 ring-primary' : 'ring-[var(--line)]'}`}
            >
              <CardContent>
                <div
                  className={`mb-5 grid size-14 place-items-center rounded-2xl text-lg font-black ${i % 3 === 0 ? 'bg-[var(--primary-soft)] text-primary' : i % 3 === 1 ? 'bg-[var(--salmon-soft)] text-[#aa5048]' : 'bg-[var(--orange-soft)] text-[#a95c14]'}`}
                >
                  {course.icon}
                </div>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="font-heading text-lg font-black">
                      {course.title}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {course.text}
                    </p>
                  </div>
                  {assigned && (
                    <span className="rounded-full bg-[var(--orange-soft)] px-2.5 py-1 text-[10px] font-black text-[#a95c14]">
                      EN CURSO
                    </span>
                  )}
                </div>
                <Button
                  onClick={() =>
                    assigned ? onLearn() : setSelectedCourse(course.id)
                  }
                  variant={assigned ? 'default' : 'outline'}
                  className="mt-6 h-10 w-full rounded-xl font-extrabold"
                >
                  {assigned
                    ? 'Continuar curso'
                    : selected
                      ? 'Plan visible'
                      : 'Ver contenido'}{' '}
                  <ChevronRight />
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
      <h2 className="mb-4 mt-8 font-heading text-xl font-black">
        Materiales de práctica
      </h2>
      <div className="grid gap-3 sm:grid-cols-3">
        {[
          [Volume2, 'Práctica auditiva', '12 audios'],
          [BookOpen, 'Historias cortas', '8 lecturas'],
          [Medal, 'Repasos', '5 disponibles'],
        ].map(([Icon, title, meta]) => (
          <button
            key={String(title)}
            className="flex items-center gap-3 rounded-2xl border border-[var(--line)] bg-card p-4 text-left hover:-translate-y-0.5"
          >
            <span className="grid size-10 place-items-center rounded-xl bg-[var(--orange-soft)] text-[#b5641a]">
              <Icon className="size-5" />
            </span>
            <span>
              <span className="block text-sm font-extrabold">
                {title as string}
              </span>
              <span className="text-xs text-muted-foreground">
                {meta as string}
              </span>
            </span>
          </button>
        ))}
      </div>

      <div className="mb-5 mt-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.13em] text-primary">
            Plan pedagógico
          </p>
          <h2 className="mt-1 font-heading text-2xl font-black">
            {activeCourse}: {curriculum.length} unidades
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
            Cada unidad parte de una capacidad observable, integra varias
            destrezas y termina con producción, no solamente reconocimiento.
          </p>
        </div>
        <Button
          onClick={() => {
            window.location.href = `/lesson?course=${selectedCourse}`;
          }}
          className="h-10 shrink-0 rounded-xl font-extrabold"
        >
          Probar lección modelo <ChevronRight />
        </Button>
      </div>
      <div className="grid gap-4 xl:grid-cols-2">
        {curriculum.map((unit, index) => (
          <Card
            key={unit.id}
            className="border-0 bg-card shadow-sm ring-1 ring-[var(--line)]"
          >
            <CardContent>
              <div className="flex items-start gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-[var(--primary-soft)] text-sm font-black text-primary">
                  {index + 1}
                </span>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-heading text-base font-black">
                      {unit.title}
                    </h3>
                    <span className="rounded-full bg-[var(--orange-soft)] px-2 py-0.5 text-[10px] font-black text-[#a95c14]">
                      {unit.level}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6">
                    <strong>Puedo:</strong> {unit.canDo.replace(/^Puedo /, '')}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {unit.languageFocus.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg bg-[#f2e5de] px-2 py-1 text-[10px] font-bold text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <p className="mt-3 text-xs leading-5 text-muted-foreground">
                    <strong>Variaciones:</strong>{' '}
                    {unit.exerciseTypes.join(' · ')}
                  </p>
                  {playableUnitIds.has(unit.id) && (
                    <Button
                      variant="outline"
                      onClick={() => {
                        window.location.href = `/lesson?course=${routeLanguageMap[selectedCourse]}&unit=${unit.id}`;
                      }}
                      className="mt-4 h-9 rounded-xl font-extrabold"
                    >
                      Practicar unidad <PlayCircle />
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-8 border-0 bg-[linear-gradient(135deg,#e5f6ef,#fff0dc)] shadow-sm ring-1 ring-[var(--line)]">
        <CardContent>
          <h2 className="font-heading text-xl font-black">
            Reglas de diseño de práctica
          </h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {sharedExercisePrinciples.map((principle, index) => (
              <div
                key={principle}
                className="flex gap-3 rounded-2xl bg-white/60 p-3"
              >
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-primary text-xs font-black text-white">
                  {index + 1}
                </span>
                <p className="text-xs font-bold leading-5">{principle}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  );
}

function QualityView() {
  const [audits, setAudits] = useState<CourseAudit[]>(() => auditAllCourses());
  const [selectedLanguage, setSelectedLanguage] = useState<AuditLanguage>('ja');
  const selected =
    audits.find((audit) => audit.language === selectedLanguage) ?? audits[0];
  const statusLabel = {
    approved: 'Aprobado',
    review_required: 'Requiere revisión',
    blocked: 'Bloqueado',
  } as const;

  function rerunAudit() {
    setAudits(auditAllCourses());
  }

  function exportReport() {
    const payload = {
      schemaVersion: '1.0',
      purpose: 'Camasa course quality report',
      generatedAt: new Date().toISOString(),
      audits,
    };
    const url = URL.createObjectURL(
      new Blob([JSON.stringify(payload, null, 2)], {
        type: 'application/json',
      }),
    );
    const link = document.createElement('a');
    link.href = url;
    link.download = `camasa-auditoria-${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <>
      <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <PageIntro
          eyebrow="Control de calidad"
          title="Auditor de cursos"
          text="Comprueba estructura, cobertura, pedagogía y estado de revisión sin cursar todas las lecciones."
        />
        <div className="mb-7 flex shrink-0 gap-2">
          <Button
            variant="outline"
            onClick={rerunAudit}
            className="h-10 rounded-xl font-extrabold"
          >
            <RefreshCw /> Auditar
          </Button>
          <Button
            onClick={exportReport}
            className="h-10 rounded-xl font-extrabold"
          >
            <Download /> Exportar
          </Button>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {audits.map((audit) => {
          const selectedCard = audit.language === selectedLanguage;
          return (
            <button
              key={audit.language}
              onClick={() => setSelectedLanguage(audit.language)}
              className={`rounded-2xl border-2 bg-card p-5 text-left shadow-sm transition hover:-translate-y-0.5 ${selectedCard ? 'border-primary' : 'border-transparent ring-1 ring-[var(--line)]'}`}
            >
              <div className="flex items-start justify-between gap-3">
                <span className="grid size-11 place-items-center rounded-2xl bg-[var(--primary-soft)] font-black text-primary">
                  {audit.language === 'ja'
                    ? 'あ'
                    : audit.language === 'ru'
                      ? 'Я'
                      : audit.language.toUpperCase()}
                </span>
                <span
                  className={`rounded-full px-2.5 py-1 text-[10px] font-black ${audit.status === 'approved' ? 'bg-[var(--primary-soft)] text-primary' : audit.status === 'blocked' ? 'bg-[var(--salmon-soft)] text-[#a94039]' : 'bg-[var(--orange-soft)] text-[#9a5818]'}`}
                >
                  {statusLabel[audit.status].toUpperCase()}
                </span>
              </div>
              <h2 className="mt-4 font-heading text-lg font-black">
                {audit.name}
              </h2>
              <div className="mt-3 flex items-end justify-between">
                <div>
                  <p className="text-3xl font-black">
                    {audit.score}
                    <span className="text-base text-muted-foreground">
                      /100
                    </span>
                  </p>
                  <p className="text-xs font-bold text-muted-foreground">
                    Índice de preparación
                  </p>
                </div>
                <p className="text-xs font-black text-[var(--salmon)]">
                  {
                    audit.findings.filter(
                      (item) => item.severity === 'critical',
                    ).length
                  }{' '}
                  críticos
                </p>
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1fr)_310px]">
        <div className="space-y-6">
          <Card className="border-0 bg-card shadow-sm ring-1 ring-[var(--line)]">
            <CardContent>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.12em] text-primary">
                    {selected.name}
                  </p>
                  <h2 className="mt-1 font-heading text-xl font-black">
                    Cobertura automática
                  </h2>
                </div>
                <span className="text-xs font-bold text-muted-foreground">
                  {selected.totals.playableUnits} de {selected.totals.units}{' '}
                  unidades jugables
                </span>
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {selected.metrics.map((metric) => (
                  <div
                    key={metric.id}
                    className="rounded-2xl bg-[#fff9f3] p-4 ring-1 ring-[var(--line)]"
                  >
                    <div className="mb-2 flex items-center justify-between text-xs font-bold">
                      <span>{metric.label}</span>
                      <span
                        className={
                          metric.value === metric.target
                            ? 'text-primary'
                            : 'text-[var(--salmon)]'
                        }
                      >
                        {metric.value}
                        {metric.unit}
                      </span>
                    </div>
                    <Progress
                      value={metric.value}
                      className={`[&_[data-slot=progress-track]]:h-2 ${metric.value === metric.target ? '[&_[data-slot=progress-indicator]]:bg-primary' : '[&_[data-slot=progress-indicator]]:bg-[var(--salmon)]'}`}
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-card shadow-sm ring-1 ring-[var(--line)]">
            <CardContent>
              <h2 className="font-heading text-xl font-black">Hallazgos</h2>
              <p className="mt-1 text-xs text-muted-foreground">
                Los errores críticos bloquean la publicación; las advertencias
                requieren seguimiento.
              </p>
              <div className="mt-5 space-y-3">
                {selected.findings.map((finding) => (
                  <article
                    key={finding.code}
                    className={`rounded-2xl border p-4 ${finding.severity === 'critical' ? 'border-[var(--salmon)]/35 bg-[var(--salmon-soft)]/55' : finding.severity === 'warning' ? 'border-[#edc68d] bg-[var(--orange-soft)]/55' : 'border-[var(--line)] bg-[#fff9f3]'}`}
                  >
                    <div className="flex gap-3">
                      {finding.severity === 'critical' ? (
                        <XCircle className="mt-0.5 size-5 shrink-0 text-[var(--salmon)]" />
                      ) : (
                        <AlertTriangle className="mt-0.5 size-5 shrink-0 text-[var(--orange)]" />
                      )}
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-sm font-black">
                            {finding.title}
                          </h3>
                          <span className="text-[9px] font-black uppercase tracking-[0.1em] text-muted-foreground">
                            {finding.code}
                          </span>
                        </div>
                        <p className="mt-1 text-xs leading-5 text-muted-foreground">
                          {finding.detail}
                        </p>
                        <p className="mt-2 text-[10px] font-bold text-muted-foreground">
                          Afecta: {finding.affectedIds.slice(0, 5).join(' · ')}
                          {finding.affectedIds.length > 5
                            ? ` · +${finding.affectedIds.length - 5} más`
                            : ''}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <aside className="space-y-5">
          <Card className="border-0 bg-[linear-gradient(145deg,#225f50,#2d9d78)] text-white shadow-lg ring-0">
            <CardContent>
              <PlayCircle className="size-8" />
              <h2 className="mt-4 font-heading text-xl font-black">
                Ruta rápida
              </h2>
              <p className="mt-2 text-xs leading-5 text-white/80">
                Prueba la introducción, los tres tipos de ejercicio, el teclado
                contextual y la finalización en una sola muestra de{' '}
                {selected.totals.exercises} actividades.
              </p>
              <Button
                onClick={() => {
                  window.location.href = selected.quickSample.route;
                }}
                className="mt-5 h-10 w-full rounded-xl bg-[var(--orange)] font-extrabold text-white shadow-[0_4px_0_#b96321] hover:bg-[#ee8f32]"
              >
                Probar muestra <ChevronRight />
              </Button>
            </CardContent>
          </Card>
          <Card className="border-0 bg-card shadow-sm ring-1 ring-[var(--line)]">
            <CardContent>
              <h2 className="font-heading text-lg font-black">
                Puerta de publicación
              </h2>
              <div className="mt-4 space-y-3">
                {selected.releaseRequirements.map((requirement) => (
                  <div
                    key={requirement.label}
                    className="flex items-start gap-2.5"
                  >
                    {requirement.passed ? (
                      <CircleCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                    ) : (
                      <XCircle className="mt-0.5 size-4 shrink-0 text-[var(--salmon)]" />
                    )}
                    <p className="text-xs font-bold leading-5">
                      {requirement.label}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 bg-[var(--orange-soft)] shadow-sm ring-1 ring-[#eccb9e]">
            <CardContent>
              <h2 className="font-heading font-black text-[#8b511b]">
                Qué significa el resultado
              </h2>
              <p className="mt-2 text-xs leading-5 text-[#8b633d]">
                El mapa curricular está diseñado, pero el auditor distingue ese
                plan de las unidades realmente implementadas. Un curso no podrá
                marcarse como completo hasta superar todos los controles.
              </p>
            </CardContent>
          </Card>
        </aside>
      </div>
    </>
  );
}

function ProfilesView({
  active,
  onChoose,
}: {
  active: ProfileId;
  onChoose: (id: ProfileId) => void;
}) {
  return (
    <>
      <PageIntro
        eyebrow="Aprendizaje compartido"
        title="¿Quién va a estudiar?"
        text="Cada perfil conserva su propio curso, progreso, racha y recomendaciones."
      />
      <div className="grid max-w-3xl gap-5 sm:grid-cols-2">
        {(
          Object.entries(profiles) as [
            ProfileId,
            (typeof profiles)[ProfileId],
          ][]
        ).map(([id, profile]) => (
          <button
            key={id}
            onClick={() => onChoose(id)}
            className={`relative rounded-[28px] border-2 bg-card p-6 text-left shadow-sm transition hover:-translate-y-1 ${active === id ? 'border-primary' : 'border-transparent ring-1 ring-[var(--line)]'}`}
          >
            {active === id && (
              <span className="absolute right-5 top-5 rounded-full bg-[var(--primary-soft)] px-2.5 py-1 text-[10px] font-black text-primary">
                ACTIVO
              </span>
            )}
            <span
              className={`grid size-16 place-items-center rounded-[22px] text-2xl font-black ${id === 'diana' ? 'bg-[var(--primary-soft)] text-primary' : 'bg-[var(--salmon-soft)] text-[#aa5048]'}`}
            >
              {profile.initial}
            </span>
            <h2 className="mt-5 font-heading text-2xl font-black">
              {profile.name}
            </h2>
            <p className="mt-1 text-sm font-bold text-muted-foreground">
              {profile.course} · {profile.level}
            </p>
            <div className="mt-5 flex gap-4 border-t border-[var(--line)] pt-4 text-xs font-bold text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Flame className="size-4 text-[var(--orange)]" />
                {profile.streak} días
              </span>
              <span className="flex items-center gap-1.5">
                <BarChart3 className="size-4 text-primary" />
                {profile.xp} XP
              </span>
            </div>
          </button>
        ))}
      </div>
    </>
  );
}
