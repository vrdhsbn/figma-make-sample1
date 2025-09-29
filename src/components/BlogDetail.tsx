import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { BlogPost } from './types';
import { toast } from 'sonner@2.0.3';

interface BlogDetailProps {
  post: BlogPost;
  onBack: () => void;
}

export default function BlogDetail({ post, onBack }: BlogDetailProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast.success('URLをクリップボードにコピーしました');
      }
    } catch (error) {
      toast.error('共有に失敗しました');
    }
  };

  // マークダウン風のコンテンツを簡易的にHTMLに変換
  const formatContent = (content: string) => {
    return content
      .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre class="bg-gray-100 p-4 rounded-lg overflow-x-auto my-4"><code>$2</code></pre>')
      .replace(/`([^`]+)`/g, '<code class="bg-gray-100 px-2 py-1 rounded text-sm">$1</code>')
      .replace(/^### (.*$)/gm, '<h3 class="text-xl font-semibold mt-8 mb-4 text-gray-900">$1</h3>')
      .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-semibold mt-10 mb-6 text-gray-900">$1</h2>')
      .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mt-12 mb-8 text-gray-900">$1</h1>')
      .replace(/\n\n/g, '</p><p class="mb-4 leading-relaxed text-gray-700">')
      .replace(/^(?!<[h1-6]|<pre|<code)/gm, '<p class="mb-4 leading-relaxed text-gray-700">')
      .replace(/(<p[^>]*>)\s*(<\/p>)/g, '');
  };

  return (
    <article className="py-20 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="mb-6 text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            ブログ一覧に戻る
          </Button>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag, index) => (
              <Badge 
                key={index} 
                variant="secondary"
                className="bg-blue-100 text-blue-700"
              >
                {tag}
              </Badge>
            ))}
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-gray-900 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{formatDate(post.publishedAt)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>{post.readTime}分で読める</span>
              </div>
            </div>
            
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleShare}
              className="border-gray-300 hover:border-blue-600 hover:text-blue-600"
            >
              <Share2 className="h-4 w-4 mr-2" />
              共有
            </Button>
          </div>
        </div>

        {/* アイキャッチ画像 */}
        <div className="mb-12">
          <ImageWithFallback
            src={post.image}
            alt={post.title}
            className="w-full h-64 md:h-80 object-cover rounded-lg"
          />
        </div>

        {/* 本文 */}
        <div className="prose max-w-none">
          <div 
            className="blog-content"
            dangerouslySetInnerHTML={{ 
              __html: formatContent(post.content)
            }}
          />
        </div>

        {/* フッター */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl mb-4 text-gray-900">この記事が役に立ったら</h3>
            <p className="text-gray-600 mb-6">
              他の技術記事もぜひご覧ください。最新の技術動向や実践的なTipsを定期的に発信しています。
            </p>
            <div className="flex gap-4">
              <Button 
                onClick={onBack}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                他の記事を読む
              </Button>
              <Button 
                variant="outline"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-gray-300 hover:border-blue-600 hover:text-blue-600"
              >
                お問い合わせ
              </Button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}