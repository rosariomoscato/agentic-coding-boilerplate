"use client";

import Link from "next/link";
import { Shield, Database, Bot, Palette, ArrowRight, Terminal, Cpu, Zap } from "lucide-react";
import { SetupChecklist } from "@/components/setup-checklist";
import { StarterPromptModal } from "@/components/starter-prompt-modal";
import { Button } from "@/components/ui/button";
import { useDiagnostics } from "@/hooks/use-diagnostics";

export default function Home() {
  const { isAuthReady, isAiReady, loading } = useDiagnostics();
  return (
    <main className="flex-1 relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto max-w-5xl relative">
          <div className="flex flex-col items-center text-center space-y-6 animate-fade-up">
            <div className="tag-terminal mb-4">
              <Terminal className="h-3 w-3 mr-1.5" />
              v1.0 — Open Source
            </div>

            <h1 className="text-5xl sm:text-7xl font-extrabold uppercase tracking-tighter font-[family-name:var(--font-display)] leading-[0.9]">
              <span className="text-foreground">Agentic</span>
              <br />
              <span className="neon-text">Coding</span>
              <br />
              <span className="text-foreground">Boilerplate</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Il boilerplate definitivo per costruire applicazioni AI-potenziate.
              Autenticazione, database, integrazione AI e strumenti moderni — tutto pronto.
            </p>

            <div className="flex items-center gap-4 pt-4">
              {loading || !isAuthReady ? (
                <Button disabled size="lg">
                  <Zap className="h-4 w-4 mr-2" />
                  Dashboard
                </Button>
              ) : (
                <Button asChild size="lg">
                  <Link href="/dashboard">
                    <Cpu className="h-4 w-4 mr-2" />
                    Vai alla Dashboard
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
              )}
              {loading || !isAiReady ? (
                <Button variant="neon" disabled size="lg">
                  <Bot className="h-4 w-4 mr-2" />
                  Chat AI
                </Button>
              ) : (
                <Button asChild variant="neon" size="lg">
                  <Link href="/chat">
                    <Bot className="h-4 w-4 mr-2" />
                    Prova Chat AI
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-4 pb-16">
        <div className="container mx-auto max-w-5xl">
          <div className="brutal-card overflow-hidden animate-brutal-in stagger-2">
            <img
              src="/Home_Page_Image.jpg"
              alt="Agentic Coding Boilerplate Dashboard Preview"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-4 pb-20">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-2xl font-bold uppercase tracking-wider font-[family-name:var(--font-display)]">
              Stack Tecnologico
            </h2>
            <div className="flex-1 h-[2px] bg-border" />
            <span className="tag-terminal">04 moduli</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: Shield,
                title: "Autenticazione",
                description: "Better Auth con integrazione Google OAuth e gestione sessioni",
                tag: "Auth",
              },
              {
                icon: Database,
                title: "Database",
                description: "Drizzle ORM con configurazione PostgreSQL e migrazioni",
                tag: "DB",
              },
              {
                icon: Bot,
                title: "AI Pronta",
                description: "Vercel AI SDK con integrazione OpenRouter per chat AI",
                tag: "AI",
              },
              {
                icon: Palette,
                title: "Componenti UI",
                description: "shadcn/ui con Tailwind CSS e design system personalizzato",
                tag: "UI",
              },
            ].map((feature, i) => (
              <div
                key={feature.title}
                className={`brutal-card p-5 space-y-3 animate-brutal-in stagger-${i + 1}`}
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 border-2 border-brutal-border bg-surface flex items-center justify-center">
                    <feature.icon className="h-5 w-5 text-neon" />
                  </div>
                  <span className="tag-terminal">{feature.tag}</span>
                </div>
                <h3 className="font-bold uppercase tracking-wider font-[family-name:var(--font-display)] text-sm">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Setup Checklist */}
      <section className="px-4 pb-20">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-2xl font-bold uppercase tracking-wider font-[family-name:var(--font-display)]">
              Configurazione
            </h2>
            <div className="flex-1 h-[2px] bg-border" />
            <span className="tag-terminal">Setup</span>
          </div>
          <SetupChecklist />
        </div>
      </section>

      {/* Next Steps */}
      <section className="px-4 pb-20">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-2xl font-bold uppercase tracking-wider font-[family-name:var(--font-display)]">
              Prossimi Passi
            </h2>
            <div className="flex-1 h-[2px] bg-border" />
            <span className="tag-terminal">Guide</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="brutal-card p-5 space-y-3 animate-brutal-in stagger-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 border-2 border-brutal-border bg-neon text-primary-foreground flex items-center justify-center text-xs font-bold font-[family-name:var(--font-display)]">1</span>
                <h4 className="font-bold uppercase tracking-wider font-[family-name:var(--font-display)] text-sm">
                  Configura le variabili
                </h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Copia <code className="px-1.5 py-0.5 bg-surface border border-brutal-border text-neon text-xs font-[family-name:var(--font-display)]">.env.example</code> in <code className="px-1.5 py-0.5 bg-surface border border-brutal-border text-neon text-xs font-[family-name:var(--font-display)]">.env.local</code>
              </p>
              <ul className="text-xs text-muted-foreground space-y-1.5 font-[family-name:var(--font-display)] uppercase tracking-wider">
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-neon" />
                  POSTGRES_URL
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-neon" />
                  OPENROUTER_API_KEY
                </li>
              </ul>
            </div>

            <div className="brutal-card p-5 space-y-3 animate-brutal-in stagger-2">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 border-2 border-brutal-border bg-neon text-primary-foreground flex items-center justify-center text-xs font-bold font-[family-name:var(--font-display)]">2</span>
                <h4 className="font-bold uppercase tracking-wider font-[family-name:var(--font-display)] text-sm">
                  Configura il database
                </h4>
              </div>
              <p className="text-sm text-muted-foreground">Esegui le migrazioni del database:</p>
              <div className="space-y-2">
                <code className="block text-xs bg-surface border-2 border-brutal-border px-3 py-2 font-[family-name:var(--font-display)] text-neon">
                  $ npm run db:generate
                </code>
                <code className="block text-xs bg-surface border-2 border-brutal-border px-3 py-2 font-[family-name:var(--font-display)] text-neon">
                  $ npm run db:migrate
                </code>
              </div>
            </div>

            <div className="brutal-card p-5 space-y-3 animate-brutal-in stagger-3">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 border-2 border-brutal-border bg-neon text-primary-foreground flex items-center justify-center text-xs font-bold font-[family-name:var(--font-display)]">3</span>
                <h4 className="font-bold uppercase tracking-wider font-[family-name:var(--font-display)] text-sm">
                  Prova le funzionalit&agrave;
                </h4>
              </div>
              <div className="space-y-2">
                {loading || !isAuthReady ? (
                  <Button size="sm" className="w-full" disabled>
                    Dashboard
                  </Button>
                ) : (
                  <Button asChild size="sm" className="w-full">
                    <Link href="/dashboard">
                      Vai alla Dashboard
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </Link>
                  </Button>
                )}
                {loading || !isAiReady ? (
                  <Button variant="neon" size="sm" className="w-full" disabled>
                    Chat AI
                  </Button>
                ) : (
                  <Button asChild variant="neon" size="sm" className="w-full">
                    <Link href="/chat">
                      Prova Chat AI
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </Link>
                  </Button>
                )}
              </div>
            </div>

            <div className="brutal-card p-5 space-y-3 animate-brutal-in stagger-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 border-2 border-brutal-border bg-neon text-primary-foreground flex items-center justify-center text-xs font-bold font-[family-name:var(--font-display)]">4</span>
                <h4 className="font-bold uppercase tracking-wider font-[family-name:var(--font-display)] text-sm">
                  Inizia a costruire
                </h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Personalizza i componenti, aggiungi le tue pagine e costruisci la tua applicazione.
              </p>
              <StarterPromptModal />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
