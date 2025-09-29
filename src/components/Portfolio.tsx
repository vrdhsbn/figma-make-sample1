import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function Portfolio() {
  const projects = [
    {
      title: 'Eコマースプラットフォーム',
      description: 'Next.jsとStripeを活用したモダンなECサイト。SEO最適化とパフォーマンス向上に注力し、コンバージョン率を30%改善。',
      image: 'https://images.unsplash.com/photo-1758973935099-5b662a863f6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMG1vY2t1cCUyMGRlc2lnbnxlbnwxfHx8fDE3NTkxMjUyMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'Supabase'],
      category: 'Webアプリケーション'
    },
    {
      title: 'タスク管理アプリ',
      description: 'React NativeとFirebaseを使用したクロスプラットフォームアプリ。リアルタイム同期とオフライン対応を実装。',
      image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzU5MDM5NjM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['React Native', 'Firebase', 'TypeScript', 'Redux Toolkit'],
      category: 'モバイルアプリ'
    },
    {
      title: '分析ダッシュボード',
      description: 'Vue.jsとD3.jsを使った企業向けデータ可視化ツール。複雑なデータを直感的に理解できるUIを設計。',
      image: 'https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3MlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU5MTE0MTY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Vue.js', 'D3.js', 'TypeScript', 'Node.js', 'PostgreSQL'],
      category: 'ダッシュボード'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            これまでに手がけた主要なプロジェクトをご紹介します。
            技術的な課題解決とユーザー体験の向上を両立させることを重視しています。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border-gray-200 hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-600 text-white">
                    {project.category}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl mb-3 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary"
                      className="bg-gray-100 text-gray-700"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    デモ
                  </Button>
                  <Button size="sm" variant="outline" className="border-gray-300">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            その他の実績については、GitHubまたはお問い合わせにてご確認いただけます。
          </p>
          <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
            <Github className="h-5 w-5 mr-2" />
            GitHub で詳細を見る
          </Button>
        </div>
      </div>
    </section>
  );
}