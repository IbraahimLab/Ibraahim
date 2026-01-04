import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Header />

      <main className="flex-1 flex flex-col items-center">
        {/* Hero Section */}
        <section className="w-full max-w-7xl px-4 pt-32 pb-16 flex flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-sm text-zinc-400 backdrop-blur-xl">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            v0.1.0 Released calling for testers
          </div>

          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
            Ibraahim.
          </h1>

          <p className="max-w-2xl text-lg md:text-xl text-zinc-400 mb-10">
            The minimalist, provider-agnostic LLM framework. <br className="hidden md:inline" />
            Switch from OpenAI to Anthropic in <span className="text-white font-mono">1 line of code</span>.
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <code className="px-6 py-3 rounded-lg bg-zinc-900 border border-zinc-800 font-mono text-sm flex items-center gap-4">
              <span className="text-purple-400">$</span> pip install ibraahim
            </code>
            <a
              href="https://github.com/IbraahimLab/Ibraahim"
              target="_blank"
              className="px-6 py-3 rounded-lg bg-white text-black font-bold hover:bg-zinc-200 transition"
            >
              Star on GitHub
            </a>
          </div>
        </section>

        {/* Slidable Examples (Carousel) */}
        <section className="w-full max-w-7xl px-4 py-20">
          <h2 className="text-2xl md:text-4xl font-bold mb-10 text-center">Build Anything.</h2>

          {/* Snap Scroll Container */}
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 scrollbar-hide">

            <ExampleCard
              title="1. The Basics"
              description="Connect any provider with a simple Prompt Template."
              code={`from ibraahim.providers import OpenAI
from ibraahim.chains import Link

llm = OpenAI(api_key="...")
chain = Link(prompt="Hello {name}!", llm=llm)

print(chain.run(name="World"))`}
            />

            <ExampleCard
              title="2. Switch Providers"
              description="Change one line to switch from GPT-4 to Claude."
              code={`from ibraahim.providers import Anthropic
# The rest of your code stays EXACTLY the same
llm = Anthropic(api_key="...") 

chain = Link(prompt="Explain quantum physics", llm=llm)
print(chain.run())`}
            />

            <ExampleCard
              title="3. Chain it Up"
              description="Create complex workflows with SequentialChain."
              code={`from ibraahim.chains import SequentialChain

# Step 1: Write title
chain1 = Link(prompt="Title for a blog about {topic}", output="title")

# Step 2: Write post
chain2 = Link(prompt="Write blog post for '{title}'", output="post")

# Run together
seq = SequentialChain([chain1, chain2])
result = seq.run(topic="AI Agents")`}
            />

            <ExampleCard
              title="4. Use Groq/Local"
              description="Standard compatible. Use Llama 3 on Groq easily."
              code={`llm = OpenAI(
  base_url="https://api.groq.com/openai/v1",
  model="llama3-8b-8192",
  api_key="gsk_..."
)

# Blazingly fast inference
chain = Link(prompt="Count to 10", llm=llm)
print(chain.run())`}
            />

          </div>
          <p className="text-center text-zinc-500 text-sm mt-4">Swipe to see more examples →</p>
        </section>

        {/* Features Grid */}
        <section className="w-full max-w-7xl px-4 py-20 border-t border-zinc-900">
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureBox
              icon="🔌"
              title="Provider Agnostic"
              desc="Never get locked in. Write your logic once, run it on OpenAI, Anthropic, Gemini, or local models."
            />
            <FeatureBox
              icon="🛡️"
              title="Type Safe"
              desc="Built on Pydantic. Inputs and outputs are validated at runtime. No more silent failures."
            />
            <FeatureBox
              icon="🚀"
              title="Zero Bloat"
              desc="No heavy agents. No background loops. Just explicit, deterministic inputs and outputs."
            />
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <span className="font-bold text-xl tracking-tighter">IBRAAHIM.</span>
        <nav className="hidden md:flex gap-6 text-sm text-zinc-400">
          <a href="#" className="hover:text-white transition">Docs</a>
          <a href="#" className="hover:text-white transition">Examples</a>
          <a href="https://github.com/IbraahimLab/Ibraahim" className="hover:text-white transition">GitHub</a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-zinc-500 text-sm">
          © {new Date().getFullYear()} Ibraahim Framework. Open Source (MIT).
        </div>
        <div className="flex gap-6">
          <a href="#" className="text-zinc-500 hover:text-white transition">Twitter</a>
          <a href="#" className="text-zinc-500 hover:text-white transition">Discord</a>
        </div>
      </div>
    </footer>
  );
}

function ExampleCard({ title, description, code }: { title: string, description: string, code: string }) {
  return (
    <div className="min-w-[85vw] md:min-w-[600px] snap-center rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 md:p-8 hover:border-zinc-700 transition duration-300">
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-zinc-400 mb-6 h-10">{description}</p>

      <div className="rounded-lg bg-black/50 p-4 border border-zinc-800/50 overflow-x-auto">
        <pre className="font-mono text-sm text-zinc-300">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}

function FeatureBox({ title, desc, icon }: { title: string, desc: string, icon: string }) {
  return (
    <div className="p-6 rounded-2xl bg-zinc-900/20 border border-zinc-800/50">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-zinc-400">{desc}</p>
    </div>
  )
}
