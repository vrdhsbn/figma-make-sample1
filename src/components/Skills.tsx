import { 
  Code, 
  Palette, 
  Smartphone, 
  Server, 
  GitBranch, 
  Zap,
  Monitor,
  Database
} from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

export default function Skills() {
  const skillCategories = [
    {
      title: 'フロントエンド',
      icon: <Code className="h-6 w-6" />,
      skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Vue.js', 'Nuxt.js'],
      color: 'text-blue-600'
    },
    {
      title: 'スタイリング',
      icon: <Palette className="h-6 w-6" />,
      skills: ['Tailwind CSS', 'Styled Components', 'Sass/SCSS', 'CSS Modules'],
      color: 'text-purple-600'
    },
    {
      title: 'モバイル',
      icon: <Smartphone className="h-6 w-6" />,
      skills: ['React Native', 'PWA', 'Responsive Design', 'Mobile First'],
      color: 'text-green-600'
    },
    {
      title: 'バックエンド',
      icon: <Server className="h-6 w-6" />,
      skills: ['Node.js', 'Express', 'GraphQL', 'REST API'],
      color: 'text-orange-600'
    },
    {
      title: 'データベース',
      icon: <Database className="h-6 w-6" />,
      skills: ['PostgreSQL', 'MongoDB', 'Supabase', 'Firebase'],
      color: 'text-indigo-600'
    },
    {
      title: 'ツール・その他',
      icon: <GitBranch className="h-6 w-6" />,
      skills: ['Git', 'Docker', 'Vercel', 'AWS', 'Jest', 'Cypress'],
      color: 'text-gray-600'
    }
  ];

  const strengths = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'パフォーマンス最適化',
      description: 'Core Web Vitalsを意識した高速なWebアプリケーションの構築'
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: 'レスポンシブデザイン',
      description: 'あらゆるデバイスで最適な体験を提供するUI設計'
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: 'UI/UX設計',
      description: 'ユーザビリティを重視したインターフェース設計と実装'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">Skills</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            モダンなフロントエンド技術を軸に、フルスタック開発まで対応可能です。
            常に新しい技術にキャッチアップし、プロジェクトに最適な技術選定を行います。
          </p>
        </div>

        {/* スキルカテゴリ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`${category.color} mr-3`}>
                    {category.icon}
                  </div>
                  <h3 className="text-gray-900">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary"
                      className="bg-gray-100 text-gray-700 hover:bg-gray-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 強み */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl text-center mb-12 text-gray-900">得意分野</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {strengths.map((strength, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <div className="text-blue-600">
                    {strength.icon}
                  </div>
                </div>
                <h4 className="mb-3 text-gray-900">{strength.title}</h4>
                <p className="text-gray-600">{strength.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}