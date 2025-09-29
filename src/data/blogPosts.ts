import { BlogPost } from '../components/types';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'React 19の新機能を完全解説',
    excerpt: 'React 19で導入される新機能について、実際のコード例と共に詳しく解説します。Server Componentsやuse hookなど、注目の機能を網羅的に紹介。',
    content: `
# React 19の新機能を完全解説

React 19がついにリリースされ、多くの革新的な機能が追加されました。この記事では、新機能の詳細と実際の使用例について解説します。

## Server Components の進化

Server Componentsがより使いやすくなり、パフォーマンスの向上が期待できます。

\`\`\`jsx
// Server Component の例
async function UserProfile({ userId }) {
  const user = await fetchUser(userId);
  
  return (
    <div>
      <h1>{user.name}</h1>
      <UserPosts userId={userId} />
    </div>
  );
}
\`\`\`

## useフックの導入

新しいuseフックにより、Promise の処理がより直感的になりました。

\`\`\`jsx
import { use } from 'react';

function UserComponent({ userPromise }) {
  const user = use(userPromise);
  
  return <div>Hello, {user.name}!</div>;
}
\`\`\`

## Actions の概念

フォーム処理がより簡潔になり、サーバーとの連携が簡単になりました。

\`\`\`jsx
function ContactForm() {
  async function submitForm(formData) {
    'use server';
    
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: formData
    });
    
    return response.json();
  }
  
  return (
    <form action={submitForm}>
      <input name="email" type="email" required />
      <button type="submit">送信</button>
    </form>
  );
}
\`\`\`

これらの新機能により、Reactアプリケーションの開発がより効率的になり、ユーザー体験も向上します。
    `,
    publishedAt: '2024-03-15',
    readTime: 8,
    tags: ['React', 'JavaScript', 'フロントエンド'],
    image: 'https://images.unsplash.com/photo-1758691737060-3814f16d5aba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFjdCUyMGRldmVsb3BtZW50JTIwbW9kZXJufGVufDF8fHx8MTc1OTEzMjI4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: '2',
    title: 'TypeScriptでより安全なコードを書くテクニック',
    excerpt: 'TypeScriptの型システムを活用して、バグを事前に防ぐ実践的なテクニックを紹介。Union型、Conditional Types、Template Literal Typesなど。',
    content: `
# TypeScriptでより安全なコードを書くテクニック

TypeScriptの型システムを最大限活用することで、実行時エラーを大幅に減らすことができます。

## Union型の効果的な活用

\`\`\`typescript
type Status = 'loading' | 'success' | 'error';

function handleStatus(status: Status) {
  switch (status) {
    case 'loading':
      return <LoadingSpinner />;
    case 'success':
      return <SuccessMessage />;
    case 'error':
      return <ErrorMessage />;
    default:
      // TypeScriptがここに到達しないことを保証
      const _exhaustive: never = status;
      return _exhaustive;
  }
}
\`\`\`

## Conditional Typesで動的な型定義

\`\`\`typescript
type APIResponse<T> = T extends string
  ? { message: T }
  : T extends number
  ? { count: T }
  : { data: T };

// 使用例
type StringResponse = APIResponse<string>; // { message: string }
type NumberResponse = APIResponse<number>; // { count: number }
\`\`\`

## Template Literal Typesの活用

\`\`\`typescript
type EventName = \`on\${Capitalize<string>}\`;

interface EventHandlers {
  onClick: () => void;
  onSubmit: (data: FormData) => void;
  onLoad: () => void;
}

// 型安全なイベントハンドラー
function addEventListener<K extends EventName>(
  eventName: K,
  handler: EventHandlers[K]
) {
  // 実装
}
\`\`\`

これらのテクニックを使うことで、より安全で保守性の高いコードを書くことができます。
    `,
    publishedAt: '2024-03-10',
    readTime: 6,
    tags: ['TypeScript', 'JavaScript', '型安全'],
    image: 'https://images.unsplash.com/photo-1699885960867-56d5f5262d38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjB0eXBlc2NyaXB0JTIwamF2YXNjcmlwdHxlbnwxfHx8fDE3NTkxMzIyODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: '3',
    title: 'パフォーマンス最適化の実践的アプローチ',
    excerpt: 'Webアプリケーションのパフォーマンスを向上させるための具体的な手法を解説。Core Web Vitals、Code Splitting、Lazy Loadingなど。',
    content: `
# パフォーマンス最適化の実践的アプローチ

現代のWebアプリケーションにおいて、パフォーマンスは重要な成功要因の一つです。

## Core Web Vitalsの改善

### Largest Contentful Paint (LCP)

\`\`\`jsx
// 画像の最適化
function OptimizedImage({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      style={{ aspectRatio: '16/9' }}
    />
  );
}
\`\`\`

### Cumulative Layout Shift (CLS)

\`\`\`css
/* レイアウトシフトを防ぐ */
.image-container {
  aspect-ratio: 16 / 9;
}

.skeleton-loader {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}
\`\`\`

## Code Splitting の実装

\`\`\`jsx
import { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyComponent />
    </Suspense>
  );
}
\`\`\`

## Bundle サイズの最適化

\`\`\`javascript
// Tree shaking を活用
import { debounce } from 'lodash-es'; // ❌ 全体をインポート
import debounce from 'lodash/debounce'; // ✅ 必要な部分のみ

// Dynamic imports
async function loadChartLibrary() {
  const { Chart } = await import('chart.js');
  return Chart;
}
\`\`\`

これらの最適化により、ユーザー体験の向上とSEO効果の向上が期待できます。
    `,
    publishedAt: '2024-03-05',
    readTime: 10,
    tags: ['パフォーマンス', 'Web最適化', 'Core Web Vitals'],
    image: 'https://images.unsplash.com/photo-1517309561013-16f6e4020305?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHRpcHN8ZW58MXx8fHwxNzU5MTMyMjg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];