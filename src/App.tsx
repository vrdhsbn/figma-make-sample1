import { useState } from 'react';
import { Toaster } from './components/ui/sonner';
import Header from './components/Header';
import Home from './components/Home';
import BlogList from './components/BlogList';
import BlogDetail from './components/BlogDetail';
import Footer from './components/Footer';
import { CurrentPage } from './components/types';
import { blogPosts } from './data/blogPosts';

export default function App() {
  const [currentPage, setCurrentPage] = useState<CurrentPage>('home');
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  const handleNavigation = (page: CurrentPage) => {
    setCurrentPage(page);
    setSelectedPostId(null);
    window.scrollTo(0, 0);
  };

  const handlePostClick = (postId: string) => {
    setSelectedPostId(postId);
    setCurrentPage('blog-detail');
    window.scrollTo(0, 0);
  };

  const handleBackToBlog = () => {
    setCurrentPage('blog');
    setSelectedPostId(null);
    window.scrollTo(0, 0);
  };

  const selectedPost = selectedPostId 
    ? blogPosts.find(post => post.id === selectedPostId)
    : null;

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'blog':
        return <BlogList posts={blogPosts} onPostClick={handlePostClick} />;
      case 'blog-detail':
        return selectedPost ? (
          <BlogDetail post={selectedPost} onBack={handleBackToBlog} />
        ) : (
          <BlogList posts={blogPosts} onPostClick={handlePostClick} />
        );
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen">
      <Header currentPage={currentPage} onNavigate={handleNavigation} />
      <main>
        {renderContent()}
      </main>
      <Footer currentPage={currentPage} onNavigate={handleNavigation} />
      <Toaster position="top-right" />
    </div>
  );
}