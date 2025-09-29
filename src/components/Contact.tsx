import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ここで実際のフォーム送信処理を実装
    toast.success(
      "お問い合わせを受け付けました。3営業日以内にご連絡いたします。",
    );
    setFormData({
      name: "",
      email: "",
      company: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">
            Contact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            プロジェクトのご相談、お見積もり、その他ご質問がございましたら、
            お気軽にお問い合わせください。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 連絡先情報 */}
          <div className="space-y-6">
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-gray-900">
                      メール
                    </h3>
                    <p className="text-gray-600">
                      contact@example.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-gray-900">電話</h3>
                    <p className="text-gray-600">
                      090-XXXX-XXXX
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-gray-900">
                      所在地
                    </h3>
                    <p className="text-gray-600">東京都内</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="mb-3 text-blue-900">
                対応可能な案件
              </h3>
              <ul className="text-blue-800 space-y-2">
                <li>• Webアプリケーション開発</li>
                <li>• モバイルアプリ開発</li>
                <li>• UI/UX設計・改善</li>
                <li>• 既存システムのリニューアル</li>
                <li>• 技術コンサルティング</li>
              </ul>
            </div>
          </div>

          {/* お問い合わせフォーム */}
          <div className="lg:col-span-2">
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">
                  お問い合わせフォーム
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">お名前 *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-2"
                        placeholder="山田太郎"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">
                        メールアドレス *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-2"
                        placeholder="example@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="company">会社名</Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        className="mt-2"
                        placeholder="株式会社サンプル"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject">件名 *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="mt-2"
                        placeholder="プロジェクトのご相談"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">
                      メッセージ *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-2 min-h-[120px]"
                      placeholder="プロジェクトの詳細、予算、スケジュールなどをお聞かせください"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    送信する
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    ※
                    お問い合わせ後、3営業日以内にご連絡いたします。
                    <br />※
                    お急ぎの場合は、お電話でのお問い合わせもお受けしています。
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}