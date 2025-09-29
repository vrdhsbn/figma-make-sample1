import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { CurrentPage } from './types';

interface FooterProps {
  currentPage?: CurrentPage;
  onNavigate?: (page: CurrentPage) => void;
}

export default function Footer({ currentPage = 'home', onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* ブランド */}
          <div>
            <h3 className="text-2xl mb-4">Portfolio</h3>
            <p className="text-gray-400 leading-relaxed">
              フロントエンドエンジニアとして、
              ユーザー体験を重視したWebアプリケーション開発を行っています。
            </p>
          </div>

          {/* ナビゲーション */}
          <div>
            <h4 className="mb-4">Menu</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => {
                    if (currentPage !== 'home') {
                      onNavigate?.('home');
                      setTimeout(() => {
                        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    } else {
                      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    if (currentPage !== 'home') {
                      onNavigate?.('home');
                      setTimeout(() => {
                        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    } else {
                      document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Skills
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    if (currentPage !== 'home') {
                      onNavigate?.('home');
                      setTimeout(() => {
                        document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    } else {
                      document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate?.('blog')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    if (currentPage !== 'home') {
                      onNavigate?.('home');
                      setTimeout(() => {
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    } else {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* ソーシャルリンク */}
          <div>
            <h4 className="mb-4">Connect</h4>
            <div className="flex gap-3 mb-4">
              <Button 
                variant="outline" 
                size="icon" 
                className="border-gray-600 text-gray-400 hover:text-white hover:border-white"
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="border-gray-600 text-gray-400 hover:text-white hover:border-white"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="border-gray-600 text-gray-400 hover:text-white hover:border-white"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
            <p className="text-gray-400 text-sm">
              お気軽にご連絡ください
            </p>
          </div>
        </div>

        {/* コピーライト */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Made with <Heart className="h-4 w-4 text-red-500" /> by Frontend Developer
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © 2024 Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}