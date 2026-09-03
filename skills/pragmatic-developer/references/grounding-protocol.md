# Anti-Hallucination Grounding Protocol

This protocol outlines mandatory verification gates before generating code or tool calls.

---

## The 4-Gate Grounding Checklist

### Gate 1: Dependency Verification
- [ ] Check `package.json`, `requirements.txt`, or project manifest.
- [ ] Is the library actually installed?
  - If **NO**, do NOT import it. Ask the user or use a standard language built-in.
- [ ] What version is installed?
  - Example: Tailwind v3 vs Tailwind v4 have completely different configuration mechanisms (`tailwind.config.js` vs `@theme` in CSS). Never guess.

### Gate 2: Signature & Declaration Verification
- [ ] Do not assume parameter names or return shapes.
- [ ] View the target function or TypeScript interface definition.
- [ ] For database columns or table names:
  - Check schema files (`schema.sql`, migration files) before generating SQL or ORM queries.

### Gate 3: File System Grounding
- [ ] Check relative paths with directory listings or existing imports in the same directory.
- [ ] Never guess path nesting (e.g. `../../utils` vs `../utils`).

### Gate 4: Execution & Verification Gate
- [ ] After writing code, run the unit test or execution script.
- [ ] Check for runtime exceptions or lint errors.
- [ ] Confirm the expected output was produced before concluding the task.
