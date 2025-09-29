import { Calendar, MapPin, Award } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ユーザー体験を重視したWebアプリケーション開発に携わり、
            技術的な課題解決とビジネス価値の創出を両立させることを大切にしています。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl mb-4 text-gray-900">経歴</h3>
              <p className="text-gray-600 leading-relaxed">
                大学でコンピューターサイエンスを学んだ後、Web制作会社でキャリアをスタート。
                その後、スタートアップ企業でフロントエンドリードとして、
                チーム構築から技術選定まで幅広く経験を積みました。
                現在はフリーランスとして、様々な企業のプロダクト開発に参画しています。
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span className="text-gray-700">東京都在住</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-blue-600" />
                <span className="text-gray-700">2019年〜 フロントエンド開発</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="h-5 w-5 text-blue-600" />
                <span className="text-gray-700">AWS認定デベロッパー取得</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h4 className="mb-3 text-blue-600">2022年〜現在</h4>
                <h5 className="mb-2">フリーランス フロントエンドエンジニア</h5>
                <p className="text-gray-600 text-sm">
                  複数のスタートアップ企業でプロダクト開発に参画。
                  React/Next.jsを中心とした開発と、UI/UXの改善提案を実施。
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="mb-3 text-blue-600">2020年〜2022年</h4>
                <h5 className="mb-2">株式会社テックスタートアップ フロントエンドリード</h5>
                <p className="text-gray-600 text-sm">
                  SaaSプロダクトの開発チームを率い、0から1のプロダクト構築を経験。
                  技術選定からアーキテクチャ設計まで担当。
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="mb-3 text-blue-600">2019年〜2020年</h4>
                <h5 className="mb-2">株式会社ウェブクリエイト フロントエンドエンジニア</h5>
                <p className="text-gray-600 text-sm">
                  コーポレートサイトやECサイトの制作・運用を通じて、
                  Web開発の基礎技術とプロジェクト管理を習得。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}