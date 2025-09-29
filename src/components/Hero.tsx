import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1609959914649-af7984c5b47f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZGVzayUyMHdvcmtzcGFjZSUyMGNvZGluZ3xlbnwxfHx8fDE3NTkxMjUyMzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Workspace background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/85"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 text-gray-900">
            Frontend Developer
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            モダンなWebアプリケーションを設計・開発する<br />
            フロントエンドエンジニアです
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            onClick={scrollToContact}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
          >
            <Mail className="mr-2 h-5 w-5" />
            お仕事のご相談
          </Button>
          <div className="flex gap-4">
            <Button variant="outline" size="icon" className="border-gray-300 hover:border-blue-600">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="border-gray-300 hover:border-blue-600">
              <Linkedin className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-lg border border-gray-200">
            <h3 className="mb-2 text-blue-600">経験年数</h3>
            <p className="text-gray-700">5年以上のフロントエンド開発経験</p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-lg border border-gray-200">
            <h3 className="mb-2 text-blue-600">専門分野</h3>
            <p className="text-gray-700">React/Next.js、TypeScript、UI/UX</p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-lg border border-gray-200">
            <h3 className="mb-2 text-blue-600">対応範囲</h3>
            <p className="text-gray-700">企画から実装・運用まで一貫対応</p>
          </div>
        </div>
      </div>
    </section>
  );
}