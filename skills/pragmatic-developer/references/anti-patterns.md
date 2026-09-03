# AI Slop vs Senior Developer Code: Side-by-Side Reference

This guide contrasts common AI-generated bloated patterns ("AI Slop") with concise, senior-engineer solutions.

---

## 1. Over-Abstraction vs Idiomatic Simplicity

### ❌ AI Slop (80 lines of factory classes for fetching data):
```typescript
interface IRequestOptions {
  method: string;
  headers?: Record<string, string>;
  timeout?: number;
}

interface IApiResponse<T> {
  data: T | null;
  error: string | null;
  status: number;
}

class ApiServiceFactory {
  private static instance: ApiServiceFactory;
  private baseUrl: string;

  private constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public static getInstance(baseUrl: string): ApiServiceFactory {
    if (!ApiServiceFactory.instance) {
      ApiServiceFactory.instance = new ApiServiceFactory(baseUrl);
    }
    return ApiServiceFactory.instance;
  }

  public async executeRequest<T>(endpoint: string, options: IRequestOptions): Promise<IApiResponse<T>> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: options.method,
        headers: options.headers
      });
      if (!response.ok) {
        return { data: null, error: response.statusText, status: response.status };
      }
      const data = await response.json();
      return { data, error: null, status: response.status };
    } catch (err: any) {
      return { data: null, error: err.message || 'Unknown error', status: 500 };
    }
  }
}
```

### ✅ Senior Developer Code (12 lines):
```typescript
export async function apiFetch<T>(endpoint: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`/api${endpoint}`, {
    headers: { 'Content-Type': 'application/json', ...init?.headers },
    ...init,
  });
  if (!res.ok) {
    const errorText = await res.text().catch(() => res.statusText);
    throw new Error(`API Error [${res.status}]: ${errorText}`);
  }
  return res.json();
}
```
**Why it's better:** Zero single-use singleton factories. Uses standard `RequestInit`. Fails fast on error instead of swallowing stack traces.

---

## 2. Hallucinated APIs vs Grounded Code

### ❌ AI Slop (Guessing non-existent methods):
```javascript
// AI hallucinating that standard Supabase client has a .bulkInsertOrUpdate method:
const { data, error } = await supabase
  .from('profiles')
  .bulkInsertOrUpdate(records, { conflictKey: 'email' });
```

### ✅ Senior Developer Code (Using verified SDK methods):
```javascript
// Checked Supabase docs/declarations: .upsert() is the standard method:
const { data, error } = await supabase
  .from('profiles')
  .upsert(records, { onConflict: 'email' });
```

---

## 3. Defensive Try/Catch Hell vs Fail-Fast

### ❌ AI Slop (Wrapping every line, swallowing errors):
```javascript
function parseUserConfig(jsonString) {
  let parsed = null;
  try {
    parsed = JSON.parse(jsonString);
  } catch (e) {
    console.warn("Could not parse jsonString, defaulting to empty object", e);
    parsed = {};
  }

  try {
    if (parsed && parsed.theme) {
      document.body.className = parsed.theme;
    }
  } catch (err) {
    console.error("Failed to set theme", err);
  }

  return parsed;
}
```

### ✅ Senior Developer Code:
```javascript
function applyUserConfig(jsonString) {
  if (!jsonString) return;
  const config = JSON.parse(jsonString);
  if (config.theme) {
    document.body.className = config.theme;
  }
  return config;
}
```
**Why it's better:** Doesn't hide corrupt data with empty fallbacks. If caller passes bad JSON, letting it throw alerts the caller immediately.

---

## 4. Drive-by Refactoring vs Surgical Change

### ❌ AI Slop:
User asks: *"Fix the date format on line 42."*
AI rewrites the entire 300-line file, reformats indentation, changes variable names from `usr` to `userEntity`, and alters helper imports.
Result: Git diff shows 300 changed lines, breaking git blame and introducing potential merge conflicts.

### ✅ Senior Developer Code:
Touches exactly line 42:
```diff
- const formattedDate = date.toLocaleDateString();
+ const formattedDate = date.toISOString().split('T')[0];
```
Result: Git diff is 1 line. Easily reviewed, tested, and reverted if necessary.
