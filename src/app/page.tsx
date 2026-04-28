"use client";

import Link from "next/link";
import { Shield, Database, Palette, Bot } from "lucide-react";
import { SetupChecklist } from "@/components/setup-checklist";
import { StarterPromptModal } from "@/components/starter-prompt-modal";
import { Button } from "@/components/ui/button";
import { useDiagnostics } from "@/hooks/use-diagnostics";

export default function Home() {
  const { isAuthReady, isAiReady, loading } = useDiagnostics();
  return (
    <main className="flex-1 container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
              <Bot className="h-7 w-7 text-primary" />
            </div>
            <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
              Starter Kit
            </h1>
          </div>
          <h2 className="text-2xl font-semibold text-muted-foreground">
            Boilerplate Completo per Applicazioni AI
          </h2>
          <p className="text-xl text-muted-foreground">
            Un boilerplate di coding agentic completo con autenticazione, database,
            integrazione AI e strumenti moderni per creare applicazioni potenti
          </p>
        </div>

        <div className="mt-8 rounded-xl overflow-hidden border shadow-lg">
          <img
            src="/Home_Page_Image.jpg"
            alt="Agentic Coding Boilerplate Homepage"
            className="w-full h-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Autenticazione
            </h3>
            <p className="text-sm text-muted-foreground">
              Better Auth con integrazione Google OAuth
            </p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Database className="h-4 w-4" />
              Database
            </h3>
            <p className="text-sm text-muted-foreground">
              Drizzle ORM con configurazione PostgreSQL
            </p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Bot className="h-4 w-4" />
              Pronto AI
            </h3>
            <p className="text-sm text-muted-foreground">
              Vercel AI SDK con integrazione OpenRouter
            </p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Palette className="h-4 w-4" />
              Componenti UI
            </h3>
            <p className="text-sm text-muted-foreground">
              shadcn/ui con Tailwind CSS
            </p>
          </div>
        </div>

        <div className="space-y-6 mt-12">
          <SetupChecklist />

          <h3 className="text-2xl font-semibold">Prossimi Passi</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-2">
                1. Configura le variabili d'ambiente
              </h4>
              <p className="text-sm text-muted-foreground mb-2">
                Copia <code>.env.example</code> in <code>.env.local</code> e
                configura:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>POSTGRES_URL (stringa di connessione PostgreSQL)</li>
                <li>GOOGLE_CLIENT_ID (credenziali OAuth)</li>
                <li>GOOGLE_CLIENT_SECRET (credenziali OAuth)</li>
                <li>OPENROUTER_API_KEY (per funzionalità AI)</li>
              </ul>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-2">2. Configura il database</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Esegui le migrazioni del database:
              </p>
              <div className="space-y-2">
                <code className="text-sm bg-muted p-2 rounded block">
                  npm run db:generate
                </code>
                <code className="text-sm bg-muted p-2 rounded block">
                  npm run db:migrate
                </code>
              </div>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-2">3. Prova le funzionalità</h4>
              <div className="space-y-2">
                {loading || !isAuthReady ? (
                  <Button size="sm" className="w-full" disabled={true}>
                    Vai alla Dashboard
                  </Button>
                ) : (
                  <Button asChild size="sm" className="w-full">
                    <Link href="/dashboard">Vai alla Dashboard</Link>
                  </Button>
                )}
                {loading || !isAiReady ? (
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    disabled={true}
                  >
                    Prova Chat AI
                  </Button>
                ) : (
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full"
                  >
                    <Link href="/chat">Prova Chat AI</Link>
                  </Button>
                )}
              </div>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-2">4. Inizia a costruire</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Personalizza i componenti, aggiungi le tue pagine e costruisci la
                tua applicazione su questa solida base.
              </p>
              <StarterPromptModal />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
