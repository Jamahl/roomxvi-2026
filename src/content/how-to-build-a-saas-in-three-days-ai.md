---
title: How I built a Video AI SaaS MVP in 3 days
date: 2025-12-15
excerpt: And how you can build your own. 
---

How I built a Video AI SaaS MVP in 3 days
=========================================

And how you can build your own.

**_TLDR; I built an MVP for an AI SaaS idea I had a few days ago, check it out at_ [vidviso.com](http://vidviso.com)_._**

I built a simple SaaS app using AI. The term nowadays is Vibe Coding and while I’m not the biggest fan of the naming, it describes well parts of the process.

<img src="/images/img-1.png" alt="Vibe Coding Process" style="width: 50%; display: block; margin: 50px auto;" class="rounded-xl shadow-lg border border-gray-800" />

AI-assisted software development is just getting wild. Lovable, Cursor et al are growing like crazy. I like Lovable, but it’s not what I wanted to use. I wanted to be closer to the code which allowed me to learn more, and added friction which made it more enjoyable. To this end, I’ve been using Windsurf for the past 8 or 9 months for random projects (see [github](https://github.com/jamahl)). I’ve tried a lot of the latest tools and settled on a stack that I’ve been really enjoying to use. This article goes through the process of how I built and deployed a fully functioning web application ([vidviso.com](http://vidviso.com)) using the latest AI tools and a mini guide if you're interested in doing something similar.
> Note: the goal was learning and having fun, not to attain perfection or become an engineer.

I’ve been playing around with code for ~10 years but I’m not an engineer. I used to edit free bootstrap templates I downloaded online to learn how websites were put together. But I could never sit down and learn python or javascript for more than an hour, so I became comfortable with nocode tools and kept playing around. When ChatGPT first came out, I was using it to help me build TwiML scripts for building a Twilio app and learn how to set up scripts to automate daily tasks. RAG wasn’t a thing, context windows were tiny, hallucinations frequent and prompt engineering was in it’s infancy. But it worked and it was exciting, allowing me to create things I’ve never been able to before. And in the past couple of years as tooling has improved, my ability to make ideas of mine a reality became easier and easier. Now we have models and IDEs that can zero-shot complex logic with backend, frontend, design, database, APIs, and deployment covered. The world is wild, and it’s only getting wilder.

Starting with an idea
---------------------

I came across a company called [TwelveLabs](https://www.twelvelabs.io/), an API-first product that understands video content incredibly well and have a suite of endpoints that can do cool things. I jumped into their open playground and knew I was playing with some special sauce. It allows you to search through video using natural language for moments ie if you upload a football match, you can search for moments such as "*all headed shots on goal*", "*find me all the big tackles*" or "*generate me a 30 second clip of players arguing with the referee*". My mind started firing. I wanted to see how quickly I could build something. I thought sports were a good place to start, so I set out to build a simple MVP where you can:

*   1 - upload a video and search for moments
    
*   2 - create clips and download them
    
*   3 - save clips to a folder
    
*   4 - search through sample videos to see it in action
    

Preparation
-----------

_Successful AI coding heavily benefits from a proper setup._

There is a process to follow when using AI tools to help you build. A series of prompts and setups that can help make AI coding so much better.

Step 1 is setting up Windsurf and gathering the docs. This is what I needed to do:

**System Prompt for Windsurf Rules.** This is like your additional step to help your AI stay on course. I found this prompt on Twitter (X is not my Twitter yet) amended to what else was important to me. It took a lot of iteration to get something that I finally felt comfortable using.
    

```You’re an engineer building this codebase. You will build this project alongside me. You've been given architecture.md and tasks.md.                                                                                                      You also have access to: 1. cloudflare-r2.md for cloudflare support AND 2. twelvelabs-pythonsdk.md, twelvelabs-api-1.md, twelvelabs-apidocs.md for support with the twelvelabs implementation and APIs.                    Search these documents thoroughly to understand how best to code and implement this solution. Think smart.   - Read all of them carefully. There should be no ambiguity about what we’re building.                                                                                                      - Follow tasks.md and complete one task at a time. Review architecture.md to understand the overall structure and flow of the codebase.                                                                                                      - When building relevant parts of the codebase, make sure to refer to the internal files I have mentioned for best practice.                                                                                                        - After each task, stop. I’ll test it. If it works, commit to GitHub and move to the next.                                                                                                          - Follow the user’s requirements carefully & to the letter.                                                                                                         - First think step-by-step                                                                                      - describe your plan for what to build in pseudocode, written out in great detail.                                                                                                         - Confirm, then write code!                                                                                                          - Always write correct, best practice, DRY principle (Dont Repeat Yourself), bug-free, fully functional and working code also it should be aligned to listed rules down below at Code                                       - Use local MCP connections for connecting to Github & Supabase, only for actions that relate to the accounts of the user Jamahl McMurran. Sometimes we will use MCP, sometimes we will not                                                                                                             - The user is non-technical, so you need to walkthrough them easily on how to integration and work through things  - when you're working through tasks.md, ensure to keep progress updated and tick off each task and sub-task as the user confirms they are completed, working and bug free.                                                                                                           - do not push to github without my permission. this should not be automatic and you shold wait for me to say yes.                                                                                                           - do not move onto the next task without my permission. you can complete sub-tasks autonomously, but I need to test each step.                                                                                                - Write the absolute minimum code required                                                                                                        - No sweeping changes                                                                                          - No unrelated edits - focus on just the task you're on                                                                                                              - Make code precise, modular, testable                                                                                                          - Don’t break existing functionality                                                                                                    - If I need to do anything (e.g. Supabase/AWS config), tell me clearly                                                                                                  Development Rules & Guidelines  Core Identity                                                                                                                                                                                                                       You are a Senior Full-Stack Engineer and 10x developer, expert in building scalable MVP applications with React, Next.js and Javascript, Supabase, Python, and modern web technologies like TailwindCSS, DaisyUI, and CrewAI/Agno AI Agents. You are thoughtful, give nuanced answers, and are brilliant at reasoning. You write minimal, well-documented code that satisfies requirements without verbosity. You are great at working with APIs, SDKs and AI tools. Complexity is where you thrive and you provide working solutions, first time, every time.   Technical Stack & Versions  Javascript, React  Supabase for backend services if required.   Beautiful CSS, TailwindCSS, DaisyUI,   Python for backend/API work, expert with FastAPI and Django  Always use stable versions and modern patterns  Architecture & Project Flow  Read architeture.md and tasks.md carefully before starting and make sure to always refer to these if you have questions, are lost, or need code examples to use to continue to build the project. Figure this out yourself before asking the user.   Follow tasks.md and complete one task at a time   After each task completion, STOP for testing and GitHub commit before proceeding  Understand the overall structure and flow from architecture.md  Use native browser for testing.  Use local MCP connections for Supabase/GitHub, do not use MCP unless otherwise requested.   Code Implementation Guidelines  Planning & Execution  Think step-by-step: Describe your plan first  Confirm, then code: Ensure understanding before implementation  Complete implementation: NO todos, placeholders, or missing pieces  Verify thoroughly: Ensure code is fully functional and finalized  Code Quality Standards  DRY Principle: Don't Repeat Yourself - build modular, reusable code  Early returns: Use whenever possible for readability  Descriptive naming: Clear variable and function names  Event handlers: Prefix with "handle" (e.g., handleClick, handleKeyDown)  Consts over functions: Use const toggle = () => and define types when possible  Focus on readability over performance optimization   Implement code splitting where needed     - Optimize image loading     - Use proper React hooks     - Minimize unnecessary re-renders  Do not overwrite code is not requested or related to the task at hand. For eg, UI should not change if you are working on backend and the user has not requested it.   Styling & UI Guidelines  Beautiful CSS only. Daisy UI. Tailwind CSS. Shadcn.   Use class: syntax instead of ternary operators in class tags when possible  Accessibility first: Include tabindex="0", aria-label, onClick, onKeyDown attributes  Error Handling & Debugging  When fixing bugs or broken code:  Trace the full user flow and identify where the issue originates  Think deeply about root cause - treat symptoms as clues, not targets  Implement comprehensive error handling and logging  Security first: Write secure, performant code  Address the root cause instead of the symptoms.  Add descriptive logging statements and error messages to track variable and code state.  Add test functions and statements to isolate the problem.  Development Approach  Follow requirements to the letter: No deviations from specifications  Be concise: Minimize prose, maximize functional code  Include all imports: Ensure proper component naming and structure  If uncertain: Say so instead of guessing  Factual answers only: Provide accurate, thoughtful responses  Always use python virtual environment for django.   File Organization  Reference file names clearly in responses  Maintain clean, organized project structure  Document code appropriately without being verbose  Implementation Guidelines .  - Focus on easy and readability code, over being performant.  - Fully implement all requested functionality.  - Leave NO todo’s, placeholders or missing pieces.  - Ensure code is complete! Verify thoroughly finalised.  - Include all required imports, and ensure proper naming of key components.  - Be concise Minimize any other prose.  - If you think there might not be a correct answer, you say so.  - If you do not know the answer, say so, instead of guessing.  - Always open using the native browser so you can see whats going on  - always use local native MCP connections for supabase and github   - When modifying existing files, make sure you are aware of the file's contents prior to suggesting an edit. Don't blindly suggest edits to files without an understanding of their current state.  - When working within an existing codebase, adhere to existing idioms, patterns and best practices that are obviously expressed in existing code, even if they are not universally adopted elsewhere.```
 
 1.  **Set up MCPs** for Supabase, Github, Context7, Railway and Vercel. (Tip=default MCP off until you need to use them). MCP connections are super useful, but they drain context, so only use them when required. It is just a fast and easy way to achieve things like setting up or editing a DB in Supabase instead of taking the SQL and doing it yourself in the UI Editor.
     
2.  **Create** architecture.md and tasks.md files These are super important and guide the build of the MVP. As the project gets more complex, you need to constantly edit and update these docs. The architecture.md doc is essentially your PRD (Product Requirements Document), a high level technical overview of your product. Here’s the system prompt I used to help me create this.
     

```
I’m building a [description of your product - the more detailed the better]. Use Next.js for frontend, Supabase for DB + auth. FastAPI/Python for backend.    Give me the full architecture:  - File + folder structure  - What each part does  - Where state lives, how services connect  Format this entire document in markdown.
```

I’d advise to use a higher-level reasoning model for this. I don’t pay for ChatGPT but I do have credits in the Open AI playground, so I used GPT 5.1 with medium reasoning.

Now with the output of the above prompt, in a new session write the following prompt:

```
Using that architecture, write a granular step-by-step plan to build the MVP.  Each task should:  - Be incredibly small + testable  - Have a clear start + end  - Focus on one concern  I’ll be passing this off to an engineering LLM that will be told to complete one task at a time, allowing me to test in between. After each task, stop. I’ll test it. If it works, commit to GitHub and move to the next.
``` 

Take both outputs and save them to the root directory of your project (the folder on your computer where you will start your project from). This will serve as the initial context for starting to build and dam does it help. Trying to build anything complex without these files turns into a giant mess.

**Create** .md files for my most important API docs.
    

I like Context7 MCP (an MCP server that hosts all popular and up to date API docs). But for some reason, I feel better creating my own markdown doc of the API docs and saving it in the root and adding to the system prompt that it should search for these files when working with these APIs. I don’t have any data, but to me it just seems to work better.

Now Windsurf is set up and ready for action. We have the technical files and prompts in place to start. There’s **one final bit of prep** before we can unleash the AI. The UI design.

My favourite tool for UI is v0 by Vercel. The quality of the designs it generates are impressive and there is a generous monthly credit you can use to get started. The prompt for this is something like:

```
Design a Video AI SaaS app. I like elegance, simplicity and use of modern design patterns. I do not want the same cookie-cutter layout. Design as if Apple or Airbnb were creating a new SaaS. See the document below for the website structure.
```

Then paste in your architecture.md contents so it gives the agent full context of all the pages it needs to build, components, copy etc. You’ll get back something that only a couple of years ago would cost $1000-3000+ for the design alone. Once you’re happy, prompt the agent once more with the following:

```   Create me a complete and detailed handover document for this website, I will be passing it to an engineering LLM to build. It must contact information about the tech stack, design patterns, colour pallete, spacing and everything required for someone to read and implement this frontend into their application.   ```

Now you’ll get a handover document that you’ll give to Windsurf later on when creating the frontend.

Download the code and save to your root directory or save to your github repo.

Something magical begins to happen
----------------------------------

_I don’t know about you, but I like the look of a computer screen when its busy. The famous matrix code? Cool as fuck. Watching the terminal install a new package? I feel like a fucking wizard. Seeing a crew of agents talk to each other and arrive at an answer? Call me Elon._

Now Windsurf has everything it needs to build the MVP. Open a new session and type in the following prompt:

```   You’re an engineer building this codebase.  You've been given architecture.md and tasks.md. You can also use @API.docs and @API2.docs when working with these APIs. Some of the frontend has been built, you can find it at [insert file location or github repo name] and use design-handover.md.  - Read both architecture and tasks carefully. There should be no ambiguity about what we’re building.  - Follow tasks.md and complete one task at a time.  - After each task, stop. I’ll test it. If it works, commit to GitHub and move to the next. "  ### CODING PROTOCOL ###  Coding Instructions  - Write the absolute minimum code required  - No sweeping changes  - No unrelated edits - focus on just the task you're on  - Make code precise, modular, testable  - Don’t break existing functionality  - If I need to do anything (e.g. Supabase/Supabase config), tell me clearly   ```

I’ve been using a mixture of Gemini Pro 3 and GPT 5.1, Claude Opus 4.5. They’re all incredibly impressive but Gemini was just really amazing and the price on Windsurf is good. I use Opus on bugs the others can’t fix, but it’s too expensive for the entire project. GPT 5.1 models are very good too, but I feel on longer tasks Gemini holds the context much better, and rightly so with a much bigger context window.


> I also tried Google’s AntiGravity IDE, the Gemini models seem a bit ‘better’ there but that’s just a feeling. It’s a spitting image of Windsurf (for those that don’t know, Google hired the founder of Windsurf to build Antigravity while Windsurf was sold to Cognition, the company behind Devin).

The magic is happening and code is being written. You can see the agents thoughts and reasoning. Dopamine hit incoming.

You’ll get errors, but if you keep prompting, and persevere, do research about the errors yourself and try and help the AI solve and think through the challenges, you’ll get to the result faster than just saying “its broken, fix it”.

Now we’re into the project and the AI is touching multiple files and complexity is growing, there are some tips that can keep you sane. Without these, building with AI becomes tough and it really tests your ability to carry on.

1.  Small tasks, always. Break big tasks down into chunks with a clear start and end.
    
2.  Git is your friend. After every task, test it, commit it, and move on. Make commit messages detailed with what you worked on, what changed etc. This helps isolate issues for bug fixing.
    
3.  Use workflows for common/repetitive tasks.
    
4.  Use multiple models. Everyone generally agrees what the best models are, but you’ll always find a use case where you think Gemini is better than Open AI. Just test and see what works for you. (Tip: the Open Source models from Windsurf ie Penguin Alpha is great for smaller, easier tasks like changing file names or styling a component, it’s free and you save your tokens for SOTA models instead).
    
5.  Keep a project-overview.md file updated. This is a winning hack. Every hour or so as the codebase grows in complexity, I’ll open up a new session with Opus 4 and ask the following:
    

 ```Review the entire codebase and generate a doc called project-handover.md and save in the root.   Write a comprehensive review of the current state of the project, files, API routes, how the frontend and backend talk to eachother, design patterns and everything you think would be smart to include. This will go to another LLM that will take over the project. ```

So now when context from one conversation bloats and I can start to notice diminishing returns, I’ll fire up a new session and use the earlier prompt *"you are an engineer building this codebase*" and append “*read @project-overview.md to get a current state of the project and help you get up to speed. Once you’re ready, review @tasks.md and continue”*.

Getting it live
---------------

_Scope creep is real._

I got a first working version done in a few hours. Auth, search, db writes, video playback, storage, everything was working. Now I was thinking “well what if we could just add this” and proceed to add small bits of functionality, make downloading easier, faster. I spent the next 2 days making performance improvements and fixing UX that probably didn’t need it - it’s true that 80% of the work takes 20% of the time, and the last 20% takes up 80%. MVPs are supposed to have things missing, but I was having fun and decided to keep on improving the product.

I was testing locally and decided it was time to push to production. If experience is anything to go by, I knew testing local vs testing in prod were two different things entirely.

So I spun up a new session and asked Gemini 3 Pro to do the following:

```   I am ready to deploy. We are using Vercel for frontend and Railway for API/backend. Use native MCP servers for Vercel, Railway and Supabase. Guide me through anything you need to me to help you with, clearly.   ```

Now you’ll get a walkthrough on what you need to do to go live. I bought a new domain, set up DNS, added environment variables to Vercel & Railway and before I knew it, I could see my creation on the Tinternet.

I would notice bugs, little fixes, improvements and UX issues all the time. I created a NOW, LATER, REMEMBER FOR FUTURE kanban in Notion and recorded everything. Now was for now, the next set of fixes after my current list of tasks had been completed. Later was for later ie I’ll review during my next set of tasks and see if it’s important. And remember for future is exactly that, I didn’t want to get distracted on shiny new features but I also wanted to keep track of my ideas. Some made it into the next ‘sprint’, others got pushed or deleted.

Getting it right
----------------

There are thousands of things to get right when building software. But when building an MVP, you have to be ruthless and forgo things that you don’t need. I didn’t need a full test suite, but a simple script to ensure existing functionality worked with new releases was important. Manual testing gets loooong after the 60th commit, so here’s when automated UI tests help. You could use Playwrite MCP so your IDE can run a test for you, or just ask your AI to develop a small set of test scripts for the apps most important functionality.

I did plan to use [CodeRabbit](https://www.coderabbit.ai/) but honestly just didn’t get around to it.

I’ve read enough horror stories on Twitter where indie-devs (& vibe coders) app’s have been exploited finding hardcoded API keys, APIs without rate-limits and missing RLS policies. AI assistant development, unless prompted, will leave all of these security issues wide open for someone to come in and take the absolute monkey out of your app. It could cost you thousands, and leave you with no motivation. There are people out there that see your messy code and take great pleasure in causing as much headache as possible.

Do yourself a favour, spin up two new sessions with Gemini Pro 3 and Claude Opus 4.5 and paste in the following prompt:

```You are a 10x security engineer and software developer. Conduct a security audit on this codebase and SaaS app to identify critical vulnerabilities and performance bottlenecks.   Your job is to review APIs, database, frontend and backend code and battle-harden the app to protect against bad actors. Give me a comprehensive and thorough overview with clear solutions to each issue, rank your finding in order and suggest if they are of critical/high/low importance.```  

Get both outputs and paste to GPT 5.1 to read and analyse both and create a final security-review document. Re-use the prompt for creating [tasks.md](http://tasks.md) and now you’ll get a granular, step by step task list on how to secure your app. I almost guarantee you'll find some holes.

Getting distracted
------------------

There were a bunch of things I did because they were fun, but not because they were needed for launching an MVP.

* 1 - webhook from github to telegram to inform me if my deployment was successful or failed and when a new user signed up
    
* 2 - a UI redesign (v0 is just too good)

<div class="flex gap-4 items-center my-8">
  <div class="w-[35%]">
    <img src="/images/image.png" alt="UI Design 1" class="rounded-xl shadow-lg border border-gray-800 w-full" />
  </div>
  <div class="w-[60%]">
    <img src="/images/image copy.png" alt="UI Design 2" class="rounded-xl shadow-lg border border-gray-800 w-full" />
  </div>
</div>
    

* 3 - Some ‘easy’ features in the ‘remember for later’ column that turned out to be hours-long feature improvements because now the codebase was big, I didn’t keep [project-overview.md](http://project-overview.md) updated, errors were more frequent, and it was 3am and I was losing concentration
    
* 4 - Performance improvements to speed up the DB connection, page loading, optimising images, how the supabase client works, how video embeds play.
    

None of this was required for an MVP.

Tech Stack
----------
For those curious about the tech used. 

| Category | Technologies |
|---|---|
| **Frontend** | Next.js App Router, TypeScript, Tailwind CSS |
| **Backend** | FastAPI (Python), SQLAlchemy |
| **Database** | Supabase |
| **AI** | TwelveLabs |
| **Storage** | Cloudflare R2 |
| **Auth** | Supabase Auth (planned) |
| **Hosting** | Vercel, Railway |
| **Code-gen** | Windsurf, Slate by Random Labs, Antigravity |

Now what to do
--------------

Now I have a functioning web app. This took me three days but really, it could have been done in one.

There are some things left to do, but it depends on what the goal is.

Goal #1 is to learn. Goal #2, can I make some money from this?

Let’s find out!

—

If you made it this far, thank you for reading. If you need any help or support while trying any of this yourself, feel free to ping me @JHM\_UK on Twitter, DM me on LinkedIn or fire an email to jamahl at [roomxvi.com](http://roomxvi.com).

