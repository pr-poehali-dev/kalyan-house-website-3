import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const categories = [
    { 
      id: 'hookahs', 
      name: 'Кальяны', 
      icon: 'Flame',
      image: 'https://cdn.poehali.dev/projects/4904a45a-6f4e-4e93-bb12-00cdbd0dc826/files/9b45058e-5b4c-4509-98c9-4c63ec34109a.jpg'
    },
    { 
      id: 'tobacco', 
      name: 'Табак', 
      icon: 'Leaf',
      image: 'https://cdn.poehali.dev/projects/4904a45a-6f4e-4e93-bb12-00cdbd0dc826/files/79d9cd19-c3d5-46f2-b6fe-8c9b615d869d.jpg'
    },
    { 
      id: 'coal', 
      name: 'Уголь', 
      icon: 'Flame',
      image: '/placeholder.svg'
    },
    { 
      id: 'disposable', 
      name: 'Одноразки', 
      icon: 'Cigarette',
      image: 'https://cdn.poehali.dev/projects/4904a45a-6f4e-4e93-bb12-00cdbd0dc826/files/e4bdbd69-b914-4769-984f-7327b8bda502.jpg'
    },
    { 
      id: 'pods', 
      name: 'Поды', 
      icon: 'Battery',
      image: '/placeholder.svg'
    },
    { 
      id: 'liquids', 
      name: 'Жидкости', 
      icon: 'Droplet',
      image: '/placeholder.svg'
    },
    { 
      id: 'cartridges', 
      name: 'Картриджи', 
      icon: 'Box',
      image: '/placeholder.svg'
    },
    { 
      id: 'accessories', 
      name: 'Аксессуары', 
      icon: 'Wrench',
      image: '/placeholder.svg'
    },
  ];

  const products = [
    {
      id: 1,
      name: 'Premium Hookah Glass',
      category: 'Кальяны',
      price: '12 990 ₽',
      image: 'https://cdn.poehali.dev/projects/4904a45a-6f4e-4e93-bb12-00cdbd0dc826/files/9b45058e-5b4c-4509-98c9-4c63ec34109a.jpg',
      badge: 'Хит'
    },
    {
      id: 2,
      name: 'Tobacco Mix Collection',
      category: 'Табак',
      price: '890 ₽',
      image: 'https://cdn.poehali.dev/projects/4904a45a-6f4e-4e93-bb12-00cdbd0dc826/files/79d9cd19-c3d5-46f2-b6fe-8c9b615d869d.jpg',
      badge: 'Новинка'
    },
    {
      id: 3,
      name: 'Vape Pod System',
      category: 'Поды',
      price: '2 490 ₽',
      image: 'https://cdn.poehali.dev/projects/4904a45a-6f4e-4e93-bb12-00cdbd0dc826/files/e4bdbd69-b914-4769-984f-7327b8bda502.jpg',
      badge: 'Скидка'
    },
    {
      id: 4,
      name: 'Premium Coal 1kg',
      category: 'Уголь',
      price: '450 ₽',
      image: '/placeholder.svg',
    },
  ];

  const promotions = [
    {
      id: 1,
      title: 'Скидка 20% на все кальяны',
      description: 'При покупке от 10 000 ₽',
      discount: '-20%'
    },
    {
      id: 2,
      title: 'Новая коллекция табака',
      description: 'Эксклюзивные вкусы в наличии',
      discount: 'NEW'
    },
    {
      id: 3,
      title: 'Подарок к заказу',
      description: 'Бесплатная доставка от 3 000 ₽',
      discount: '🎁'
    },
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-secondary/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Flame" className="text-primary" size={32} />
              <h1 className="text-2xl font-bold text-primary-foreground">Kalyan House</h1>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              {['home', 'catalog', 'about', 'promotions', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-primary-foreground/80'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'catalog' && 'Каталог'}
                  {section === 'about' && 'О нас'}
                  {section === 'promotions' && 'Акции'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </nav>

            <Button size="sm" className="hidden md:flex">
              <Icon name="ShoppingCart" size={18} className="mr-2" />
              Корзина
            </Button>

            <Button size="sm" variant="ghost" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </header>

      <section id="home" className="relative py-20 md:py-32 bg-gradient-to-br from-secondary to-secondary/80">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Премиум кальяны и аксессуары
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8">
              Широкий ассортимент кальянов, табака, углей и vape-устройств с доставкой по всей России
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" onClick={() => scrollToSection('catalog')}>
                Перейти в каталог
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-background/10 border-primary-foreground/20 text-primary-foreground hover:bg-background/20" onClick={() => scrollToSection('promotions')}>
                Акции
              </Button>
            </div>
            <div className="mt-8 flex justify-center">
              <a href="https://t.me/PoisonRose321" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gap-2 text-lg px-8">
                  <Icon name="Send" size={20} />
                  Написать в Telegram
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Категории товаров</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {categories.map((category) => (
              <Card key={category.id} className="group cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon name={category.icon as any} className="text-primary" size={32} />
                  </div>
                  <h4 className="font-semibold">{category.name}</h4>
                </CardContent>
              </Card>
            ))}
          </div>

          <h3 className="text-3xl font-bold text-center mb-12">Популярные товары</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="group cursor-pointer transition-all hover:shadow-xl overflow-hidden">
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {product.badge && (
                    <span className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {product.badge}
                    </span>
                  )}
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground mb-1">{product.category}</p>
                  <h4 className="font-semibold mb-2">{product.name}</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-primary">{product.price}</span>
                    <Button size="sm" variant="ghost" className="hover:bg-primary/10">
                      <Icon name="ShoppingCart" size={18} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="promotions" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Актуальные акции</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {promotions.map((promo) => (
              <Card key={promo.id} className="relative overflow-hidden group cursor-pointer hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                    {promo.discount}
                  </div>
                  <h4 className="text-xl font-bold mb-3 pr-20">{promo.title}</h4>
                  <p className="text-muted-foreground">{promo.description}</p>
                  <Button variant="link" className="mt-4 p-0 h-auto">
                    Подробнее <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-8">О магазине Kalyan House</h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-muted-foreground mb-4">
                  Kalyan House — это премиальный магазин кальянов и сопутствующих товаров. 
                  Мы предлагаем широкий ассортимент качественной продукции для настоящих ценителей.
                </p>
                <p className="text-muted-foreground mb-6">
                  В нашем каталоге вы найдете кальяны ведущих мировых брендов, эксклюзивные табачные смеси, 
                  качественный уголь и современные vape-устройства.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">500+</div>
                    <div className="text-sm text-muted-foreground">Товаров</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">5 лет</div>
                    <div className="text-sm text-muted-foreground">На рынке</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">10K+</div>
                    <div className="text-sm text-muted-foreground">Клиентов</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 text-center">
                  <Icon name="Truck" className="mx-auto mb-2 text-primary" size={32} />
                  <h5 className="font-semibold mb-1">Быстрая доставка</h5>
                  <p className="text-sm text-muted-foreground">По всей России</p>
                </Card>
                <Card className="p-4 text-center">
                  <Icon name="Shield" className="mx-auto mb-2 text-primary" size={32} />
                  <h5 className="font-semibold mb-1">Гарантия качества</h5>
                  <p className="text-sm text-muted-foreground">Только оригинал</p>
                </Card>
                <Card className="p-4 text-center">
                  <Icon name="Gift" className="mx-auto mb-2 text-primary" size={32} />
                  <h5 className="font-semibold mb-1">Бонусная система</h5>
                  <p className="text-sm text-muted-foreground">Скидки до 15%</p>
                </Card>
                <Card className="p-4 text-center">
                  <Icon name="HeadphonesIcon" className="mx-auto mb-2 text-primary" size={32} />
                  <h5 className="font-semibold mb-1">Поддержка 24/7</h5>
                  <p className="text-sm text-muted-foreground">Всегда на связи</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Контакты</h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div>
              <h4 className="text-xl font-semibold mb-6">Свяжитесь с нами</h4>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" className="text-primary mt-1" size={20} />
                  <div>
                    <p className="font-medium">Адрес</p>
                    <p className="text-muted-foreground">г. Волгоград, ул. Советская, д. 20</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Phone" className="text-primary mt-1" size={20} />
                  <div>
                    <p className="font-medium">Телефон</p>
                    <p className="text-muted-foreground">+7 (902) 310-46-88</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Mail" className="text-primary mt-1" size={20} />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">rinatsimashev@yandex.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Clock" className="text-primary mt-1" size={20} />
                  <div>
                    <p className="font-medium">Режим работы</p>
                    <p className="text-muted-foreground">Ежедневно с 11:00 до 23:00</p>
                  </div>
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-4">Форма обратной связи</h4>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Email" />
                  </div>
                  <div>
                    <Input type="tel" placeholder="Телефон" />
                  </div>
                  <div>
                    <Textarea placeholder="Ваше сообщение" rows={4} />
                  </div>
                  <Button className="w-full">Отправить сообщение</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Flame" className="text-primary" size={24} />
                <h5 className="font-bold text-lg">Kalyan House</h5>
              </div>
              <p className="text-primary-foreground/70 text-sm">
                Премиум кальяны и аксессуары с доставкой по всей России
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Каталог</h5>
              <ul className="space-y-2 text-sm text-primary-foreground/70">
                <li><a href="#" className="hover:text-primary transition-colors">Кальяны</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Табак</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Уголь</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Vape</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Информация</h5>
              <ul className="space-y-2 text-sm text-primary-foreground/70">
                <li><a href="#" className="hover:text-primary transition-colors">О компании</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Доставка и оплата</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Гарантии</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Мы в соцсетях</h5>
              <div className="flex gap-3">
                <a href="https://t.me/PoisonRose321" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Icon name="Send" size={20} />
                </a>
                <a href="https://vk.com/kalyanhouse_vlg" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Icon name="MessageCircle" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/10 pt-8 text-center text-sm text-primary-foreground/70">
            <p>© 2024 Kalyan House. Все права защищены</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;