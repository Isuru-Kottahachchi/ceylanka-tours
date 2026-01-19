import type { Metadata } from 'next';
import Image from 'next/image';
import { Badge } from "@/components/ui/badge";
import { Utensils, Clock, Star } from "lucide-react";

export const metadata: Metadata = {
  title: 'Famous Sri Lankan Food - Must-Try Authentic Cuisine for Travelers | Ceylanka Tours',
  description: 'Discover authentic Sri Lankan cuisine! From spicy curries to sweet treats, explore the must-try traditional foods and dishes that make Sri Lanka a food lover\'s paradise.',
  keywords: 'Sri Lankan food, Sri Lankan cuisine, traditional Sri Lankan dishes, Sri Lankan curry, hoppers, kottu, rice and curry, Sri Lankan sweets, authentic food Sri Lanka, must try food Sri Lanka',
  openGraph: {
    title: 'Famous Sri Lankan Food - Authentic Cuisine Guide for Travelers',
    description: 'Explore the flavors of Sri Lanka! Discover authentic curries, street food, and traditional sweets you must try.',
    type: 'article',
  },
};

interface FoodItem {
  id: number;
  name: string;
  category: string;
  description: string;
  taste: string;
  servingTip: string;
  spiceLevel: 'Mild' | 'Medium' | 'Spicy' | 'Very Spicy';
  images: string[];
}

const famousFoods: FoodItem[] = [
  {
    id: 1,
    name: 'Rice and Curry',
    category: 'Main Dish',
    description: 'This is the heart of Sri Lankan cuisine! A traditional meal with fluffy white or red rice served with multiple curry dishes. You\'ll get vegetable curries, dhal (lentil curry), fish or chicken curry, and pol sambol (coconut relish). It\'s colorful, flavorful, and absolutely delicious!',
    taste: 'A perfect balance of spicy, tangy, and savory flavors. Each curry has its own unique taste.',
    servingTip: 'Mix everything together on your plate - that\'s how locals eat it! Best enjoyed for lunch.',
    spiceLevel: 'Medium',
    images: ['/Cuisineinsl.jpg']
  },
  {
    id: 2,
    name: 'Hoppers (Appa)',
    category: 'Breakfast',
    description: 'Imagine a crispy, bowl-shaped pancake made from rice flour and coconut milk. Hoppers are a breakfast favorite! The edges are crispy while the center is soft and fluffy. Try the egg hopper - it has an egg cooked right in the middle!',
    taste: 'Slightly sweet and coconutty with crispy edges.',
    servingTip: 'Eat with lunu miris (spicy onion sambol) or curry. Perfect for breakfast or dinner!',
    spiceLevel: 'Mild',
    images: ['/Hoppers.webp']
  },
  {
    id: 3,
    name: 'Kottu Roti',
    category: 'Street Food',
    description: 'Listen for the rhythmic chopping sound on the streets! Kottu is made by chopping flatbread (roti) with vegetables, eggs, and meat or seafood on a hot griddle. It\'s Sri Lanka\'s famous street food and tastes amazing!',
    taste: 'Savory, spicy, and incredibly satisfying. Each bite is packed with flavor!',
    servingTip: 'Order it at night from street vendors. Choose chicken, beef, or vegetable kottu based on your preference.',
    spiceLevel: 'Spicy',
    images: ['/Kottu.jpg']
  },
  {
    id: 4,
    name: 'String Hoppers (Idiyappam)',
    category: 'Breakfast',
    description: 'These look like little nests made of steamed rice noodles! String hoppers are soft, delicate, and light. They\'re a popular breakfast choice that\'s easy on the stomach.',
    taste: 'Mild and slightly nutty flavor from rice.',
    servingTip: 'Eat with coconut milk curry, dhal, or sambol. Great for breakfast!',
    spiceLevel: 'Mild',
    images: ['/String-Hoppers.jpg']
  },
  {
    id: 5,
    name: 'Lamprais',
    category: 'Special Dish',
    description: 'A Dutch-influenced Sri Lankan specialty! Rice cooked in stock is mixed with meat curry, eggplant curry, and frikkadels (meatballs), all wrapped in a banana leaf and baked. The banana leaf gives it a special aroma!',
    taste: 'Rich, aromatic, and bursting with layered flavors.',
    servingTip: 'Usually served on special occasions. Best enjoyed slowly to savor all the flavors!',
    spiceLevel: 'Medium',
    images: ['/Lamprais.jpg']
  },
  {
    id: 6,
    name: 'Pol Sambol',
    category: 'Side Dish',
    description: 'A fiery red coconut relish that appears on every Sri Lankan table! Made with fresh grated coconut, red chilies, lime juice, and Maldive fish. It looks spicy and it IS spicy, but so delicious!',
    taste: 'Spicy, tangy, and coconutty - a flavor explosion!',
    servingTip: 'Use it as a side with rice, hoppers, or bread. Start with a small amount if you\'re not used to spice!',
    spiceLevel: 'Very Spicy',
    images: ['/Pol-Sambol.jpg']
  },
  {
    id: 7,
    name: 'Fish Ambul Thiyal',
    category: 'Main Dish',
    description: 'A unique sour fish curry from Southern Sri Lanka. The fish is cooked with goraka (a sour fruit), black pepper, and spices. It\'s dry, dark, and incredibly flavorful - a must-try for seafood lovers!',
    taste: 'Tangy, slightly sour, and deeply spiced.',
    servingTip: 'Eat with rice and curry. The sour taste is refreshing!',
    spiceLevel: 'Spicy',
    images: ['/Fish-Ambul-Thiyal.jpg']
  },
  // {
  //   id: 8,
  //   name: 'Parippu (Dhal Curry)',
  //   category: 'Curry',
  //   description: 'A comforting, creamy lentil curry that\'s part of every rice and curry meal. Made with red lentils, coconut milk, and a tempering of curry leaves and spices. It\'s mild and delicious!',
  //   taste: 'Creamy, mildly spiced, and comforting.',
  //   servingTip: 'Mix it with rice to add moisture and flavor. Great for those who prefer mild food!',
  //   spiceLevel: 'Mild',
  //   images: ['/Cuisineinsl.jpg']
  // },
  {
    id: 9,
    name: 'Watalappan',
    category: 'Dessert',
    description: 'A rich, creamy coconut custard pudding with jaggery (palm sugar), cashew nuts, and cardamom. This is Sri Lanka\'s most famous dessert! It\'s steamed until perfectly set and has a caramel-like flavor.',
    taste: 'Sweet, creamy, and aromatic with hints of cardamom and nutmeg.',
    servingTip: 'Served chilled or at room temperature. Perfect after a spicy meal!',
    spiceLevel: 'Mild',
    images: ['/Watalappan.jpg']
  },
  // {
  //   id: 10,
  //   name: 'Kiri Pani (Milk Toffee)',
  //   category: 'Sweet',
  //   description: 'A sweet, fudge-like treat made from condensed milk and sugar. These little squares of happiness are chewy, creamy, and absolutely addictive! Often flavored with cashew nuts or cardamom.',
  //   taste: 'Very sweet, creamy, and melt-in-your-mouth delicious.',
  //   servingTip: 'Perfect with tea! Buy some to take home - they make great gifts.',
  //   spiceLevel: 'Mild',
  //   images: ['/Pani-Walalu.jpg']
  // },
  {
    id: 11,
    name: 'Kokis',
    category: 'Sweet',
    description: 'Beautiful flower-shaped crispy cookies! Made during festive seasons, especially Sinhala and Tamil New Year. The batter is poured through a special mold into hot oil, creating these crunchy, sweet treats.',
    taste: 'Crispy, slightly sweet, and coconutty.',
    servingTip: 'Great with tea! Look for them during April (New Year season).',
    spiceLevel: 'Mild',
    images: ['/Kaokis.jpg']
  },
  {
    id: 12,
    name: 'Kavum',
    category: 'Sweet',
    description: 'Deep-fried sweet cakes made with rice flour and treacle (kithul syrup). They\'re crunchy on the outside and soft inside with a beautiful golden color. A traditional festive sweet!',
    taste: 'Sweet with a unique treacle flavor and crispy texture.',
    servingTip: 'Best fresh and warm! Common during New Year celebrations.',
    spiceLevel: 'Mild',
    images: ['/Kavum.jpg']
  },
  {
    id: 13,
    name: 'Isso Wadey (Prawn Fritters)',
    category: 'Snack',
    description: 'Crispy, golden fritters loaded with fresh prawns! Made with lentil batter, onions, curry leaves, and chilies. They\'re a popular tea-time snack and absolutely irresistible!',
    taste: 'Crispy, savory, with a nice prawn flavor and mild spice.',
    servingTip: 'Best eaten hot with chili sauce. Perfect for evening snack time!',
    spiceLevel: 'Medium',
    images: ['/Isso-wadey.jpg']
  },
  {
    id: 14,
    name: 'Pittu',
    category: 'Breakfast',
    description: 'Steamed cylinders of rice flour and fresh coconut, layered and cooked in a bamboo mold. It\'s a traditional breakfast that\'s healthy and filling!',
    taste: 'Mild, slightly sweet from coconut, with a unique texture.',
    servingTip: 'Eat with coconut milk curry, banana, or jaggery. Great for breakfast!',
    spiceLevel: 'Mild',
    images: ['/Pittu.jpg']
  },
  // {
  //   id: 15,
  //   name: 'Gotu Kola Sambol',
  //   category: 'Salad',
  //   description: 'A healthy, refreshing salad made with gotu kola leaves (a nutritious herb), fresh coconut, onions, lime, and chilies. It\'s considered very healthy and is believed to boost memory!',
  //   taste: 'Fresh, tangy, and slightly spicy.',
  //   servingTip: 'Eat as a side dish with rice and curry. Very nutritious!',
  //   spiceLevel: 'Medium',
  //   images: ['/Pani-Walalu.jpg']
  // },
  {
    id: 16,
    name: 'Curd and Honey (Kiri Piti)',
    category: 'Dessert',
    description: 'Thick, creamy buffalo curd served with sweet kithul treacle (palm honey). This simple dessert is incredibly delicious! The curd is tangy and the treacle is sweet - a perfect combination.',
    taste: 'Tangy curd balanced with sweet, caramel-like treacle.',
    servingTip: 'Best served chilled. A light, refreshing dessert!',
    spiceLevel: 'Mild',
    images: ['/Kiri-pani.jpg']
  },
  {
    id: 17,
    name: 'Chicken Curry',
    category: 'Curry',
    description: 'Sri Lankan chicken curry is rich, spicy, and full of flavor! Cooked with roasted curry powder, coconut milk, curry leaves, and aromatic spices. Every region has its own version!',
    taste: 'Rich, spicy, and aromatic with coconut undertones.',
    servingTip: 'Best with rice. Ask for it at any local restaurant!',
    spiceLevel: 'Spicy',
    images: ['/Chicken-curry.jpg']
  },
  {
    id: 18,
    name: 'Achcharu (Pickle)',
    category: 'Side Dish',
    description: 'A tangy, sweet, and spicy pickle made with fruits and vegetables like mango, pineapple, and carrots. Mixed with mustard, vinegar, and sugar - it\'s addictively good!',
    taste: 'Tangy, sweet, spicy, and crunchy all at once!',
    servingTip: 'Eat as a side with rice or as a snack. Very popular!',
    spiceLevel: 'Medium',
    images: ['/Achcharu.jpg']
  },
  {
    id: 19,
    name: 'Kola Kanda',
    category: 'Breakfast',
    description: 'A healthy green herbal porridge made with leafy greens, rice, and coconut milk. It might look unusual, but it\'s super healthy and gives you energy for the whole day!',
    taste: 'Earthy, mild, and nutritious.',
    servingTip: 'Best for breakfast. Considered very healthy and energizing!',
    spiceLevel: 'Mild',
    images: ['/Kola-kanda.jpg']
  },
  // {
  //   id: 20,
  //   name: 'Wood Apple Juice',
  //   category: 'Beverage',
  //   description: 'A unique, refreshing drink made from wood apple fruit. The fruit has a hard shell but inside is sweet-sour pulp. Mixed with water, jaggery, and sometimes a hint of salt - it\'s very refreshing!',
  //   taste: 'Sweet, tangy, and incredibly refreshing.',
  //   servingTip: 'Perfect for hot days! Try it chilled.',
  //   spiceLevel: 'Mild',
  //   images: ['/Cuisineinsl.jpg']
  // },
  {
    id: 21,
    name: 'Kiribath (Milk Rice)',
    category: 'Special Dish',
    description: 'A traditional dish made by cooking rice in thick coconut milk until creamy. Kiribath is eaten during special occasions, festivals, and to celebrate new beginnings! It\'s often the first thing eaten on New Year\'s Day.',
    taste: 'Creamy, mildly sweet from coconut, soft and comforting.',
    servingTip: 'Cut into diamond shapes and eat with lunu miris or jaggery. Perfect for breakfast on special days!',
    spiceLevel: 'Mild',
    images: ['/Kiribath.jpg']
  },
  {
    id: 22,
    name: 'Roti',
    category: 'Breakfast',
    description: 'A thin, flatbread made from wheat flour and grated coconut. Unlike Indian roti, Sri Lankan roti is thicker and contains coconut, giving it a unique flavor! Often stuffed with vegetables or eaten plain.',
    taste: 'Soft, slightly sweet from coconut, filling and delicious.',
    servingTip: 'Eat with curry or make it into a wrap with vegetables. Great for breakfast or dinner!',
    spiceLevel: 'Mild',
    images: ['/Pol-Roti.jpg']
  },
  {
    id: 23,
    name: 'Ceylon Tea',
    category: 'Beverage',
    description: 'World-famous black tea grown in Sri Lanka\'s cool highlands! Ceylon tea is known for its bright color, strong flavor, and refreshing taste. Watching tea being picked and processed is a must-do experience!',
    taste: 'Strong, bold, slightly citrusy with a clean finish.',
    servingTip: 'Try it plain or with milk and sugar. Visit a tea plantation to taste fresh tea!',
    spiceLevel: 'Mild',
    images: ['/Ceylon-tea.jpg']
  }
];

function ImageCarousel({ images, title }: { images: string[], title: string }) {
  return (
    <div className="relative w-full h-48 rounded-lg overflow-hidden group bg-orange-100">
      {images.length > 0 ? (
        <img
          src={images[0]}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/placeholder.jpg';
          }}
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-orange-100 to-orange-50 flex items-center justify-center">
          <span className="text-orange-400 text-sm">No image available</span>
        </div>
      )}
    </div>
  );
}

function SpiceLevelBadge({ level }: { level: string }) {
  const colors = {
    'Mild': 'bg-green-100 text-green-800',
    'Medium': 'bg-yellow-100 text-yellow-800',
    'Spicy': 'bg-orange-100 text-orange-800',
    'Very Spicy': 'bg-red-100 text-red-800'
  };

  const icons = {
    'Mild': '🌿',
    'Medium': '🌶️',
    'Spicy': '🌶️🌶️',
    'Very Spicy': '🌶️🌶️🌶️'
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${colors[level as keyof typeof colors]}`}>
      <span className="mr-1">{icons[level as keyof typeof icons]}</span>
      {level}
    </span>
  );
}

export default function FamousCuisinePage() {
  const categories = ['All', 'Main Dish', 'Breakfast', 'Curry', 'Dessert', 'Sweet', 'Snack', 'Street Food', 'Side Dish', 'Beverage'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <Utensils className="h-16 w-16 text-orange-100" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Discover Sri Lankan Cuisine
          </h1>
          <p className="text-xl md:text-2xl mb-6 max-w-3xl mx-auto font-light text-orange-100">
            A delicious journey through authentic flavors and traditional foods that make Sri Lanka a food lover's paradise.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
              <Clock className="h-4 w-4 mr-2" />
              Traditional Recipes
            </Badge>
            <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
              <Star className="h-4 w-4 mr-2" />
              Authentic Flavors
            </Badge>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="pt-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Why Sri Lankan Food is Special 🌟
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-lg leading-relaxed mb-4">
                Sri Lankan cuisine is unique and incredibly diverse! It combines flavors from ancient 
                traditions with influences from Portuguese, Dutch, and British colonial periods. The result? 
                An amazing fusion that you won't find anywhere else!
              </p>
              <div className="grid md:grid-cols-3 gap-6 my-8">
                <div className="bg-orange-50 p-6 rounded-lg">
                  <div className="text-3xl mb-3">🌶️</div>
                  <h3 className="font-bold text-lg mb-2">Bold & Spicy</h3>
                  <p className="text-sm">Most dishes have a kick! But don't worry - you can always ask for less spice.</p>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg">
                  <div className="text-3xl mb-3">🥥</div>
                  <h3 className="font-bold text-lg mb-2">Coconut Love</h3>
                  <p className="text-sm">Fresh coconut is used in almost everything - it makes food creamy and delicious!</p>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg">
                  <div className="text-3xl mb-3">🌿</div>
                  <h3 className="font-bold text-lg mb-2">Fresh & Aromatic</h3>
                  <p className="text-sm">Fresh curry leaves, cinnamon, cardamom, and local spices make every dish aromatic.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rice and Curry: The Heart of Sri Lankan Cuisine */}
      <section className="pb-16 bg-white">
        <div className="container mx-auto px-4 lg:px-16 xl:px-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Rice and Curry: The Heart of Sri Lankan Cuisine 🍛
            </h2>
            
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Traditional Rice and Curry Experience</h3>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                A Sri Lankan rice and curry meal is not just food - it's a cultural experience! You'll get a 
                plate of fragrant basmati rice surrounded by 5-8 different curries, each with its own unique 
                flavor profile. This is the daily meal that every Sri Lankan family enjoys, and it's perfect 
                for sharing and trying multiple flavors at once.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-bold text-xl mb-4 text-orange-600 flex items-center">
                    <span className="mr-2">🍽️</span> What You'll Get:
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2 mt-1">•</span>
                      <p className="text-gray-700">Steamed white or red rice (base)</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2 mt-1">•</span>
                      <p className="text-gray-700">Fish or chicken curry (protein)</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2 mt-1">•</span>
                      <p className="text-gray-700">Dhal curry (lentils)</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2 mt-1">•</span>
                      <p className="text-gray-700">3-4 vegetable curries</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2 mt-1">•</span>
                      <p className="text-gray-700">Coconut sambol (spicy condiment)</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2 mt-1">•</span>
                      <p className="text-gray-700">Papadums (crispy crackers)</p>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-bold text-xl mb-4 text-green-600 flex items-center">
                    <span className="mr-2">👥</span> Perfect For:
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">•</span>
                      <p className="text-gray-700">First-time visitors to Sri Lanka</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">•</span>
                      <p className="text-gray-700">People who want to try multiple flavors</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">•</span>
                      <p className="text-gray-700">Vegetarians (many vegetable options)</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">•</span>
                      <p className="text-gray-700">Those who love spicy food</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">•</span>
                      <p className="text-gray-700">Lunch or dinner (served anytime)</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Food Items Section */}
      <section className="py-16 bg-gradient-to-b from-white to-orange-50">
        <div className="container mx-auto px-4 lg:px-16 xl:px-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Must-Try Sri Lankan Foods 🍽️
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Here's your ultimate guide to authentic Sri Lankan dishes. Each one is special and worth trying!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {famousFoods.map((food) => (
              <div 
                key={food.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative w-full h-48">
                  <Image 
                    src={food.images[0]} 
                    alt={food.name} 
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{food.name}</h3>
                    <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full whitespace-nowrap ml-2">
                      {food.category}
                    </span>
                  </div>

                  <div className="mb-3">
                    <SpiceLevelBadge level={food.spiceLevel} />
                  </div>

                  <p className="text-gray-700 text-sm mb-3 leading-relaxed line-clamp-3">
                    {food.description}
                  </p>

                  <div className="space-y-2 border-t pt-3">
                    <div>
                      <h4 className="font-semibold text-gray-900 flex items-center mb-1 text-xs">
                        <span className="mr-1">😋</span> Taste:
                      </h4>
                      <p className="text-xs text-gray-600 line-clamp-2">{food.taste}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 flex items-center mb-1 text-xs">
                        <span className="mr-1">💡</span> Tip:
                      </h4>
                      <p className="text-xs text-gray-600 line-clamp-2">{food.servingTip}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Food Specialties Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-16 xl:px-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Regional Food Specialties 🗺️
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              Each region of Sri Lanka has its own special dishes and flavors. Here's what to try where!
            </p>
            
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Coastal Cuisine */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="mr-2 text-2xl">🏖️</span> Coastal Cuisine
                </h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h4 className="font-bold text-sm mb-2 text-blue-800">Galle & Southern Coast</h4>
                    <ul className="space-y-1 text-xs text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-1">•</span>
                        <span>Fresh seafood curries</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-1">•</span>
                        <span>Crab curry</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-1">•</span>
                        <span>Prawns with coconut</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h4 className="font-bold text-sm mb-2 text-blue-800">Negombo</h4>
                    <ul className="space-y-1 text-xs text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-1">•</span>
                        <span>Lagoon crab</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-1">•</span>
                        <span>Fresh fish varieties</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-1">•</span>
                        <span>Coconut-based curries</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h4 className="font-bold text-sm mb-2 text-blue-800">Trincomalee</h4>
                    <ul className="space-y-1 text-xs text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-1">•</span>
                        <span>Unique Tamil-influenced seafood dishes</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-1">•</span>
                        <span>Fish and rice combinations</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Hill Country */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="mr-2 text-2xl">🏔️</span> Hill Country
                </h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h4 className="font-bold text-sm mb-2 text-green-800">Kandy</h4>
                    <ul className="space-y-1 text-xs text-gray-700">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-1">•</span>
                        <span>Traditional Kandyan cuisine</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-1">•</span>
                        <span>Special rice varieties</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-1">•</span>
                        <span>Temple food</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h4 className="font-bold text-sm mb-2 text-green-800">Nuwara Eliya</h4>
                    <ul className="space-y-1 text-xs text-gray-700">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-1">•</span>
                        <span>Tea estate cuisine</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-1">•</span>
                        <span>British-influenced dishes</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-1">•</span>
                        <span>Highland vegetables</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h4 className="font-bold text-sm mb-2 text-green-800">Ella</h4>
                    <ul className="space-y-1 text-xs text-gray-700">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-1">•</span>
                        <span>Mountain herbs</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-1">•</span>
                        <span>Unique vegetable curries</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-1">•</span>
                        <span>Cool climate specialties</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Northern Cuisine */}
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="mr-2 text-2xl">🌴</span> Northern Cuisine
                </h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h4 className="font-bold text-sm mb-2 text-red-800">Jaffna</h4>
                    <ul className="space-y-1 text-xs text-gray-700">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-1">•</span>
                        <span>Tamil cuisine</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-1">•</span>
                        <span>Crab curry</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-1">•</span>
                        <span>Unique spice blends</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-1">•</span>
                        <span>Palmyra-based dishes</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h4 className="font-bold text-sm mb-2 text-red-800">Mannar</h4>
                    <ul className="space-y-1 text-xs text-gray-700">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-1">•</span>
                        <span>Seafood specialties</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-1">•</span>
                        <span>Traditional fishing community recipes</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h4 className="font-bold text-sm mb-2 text-red-800">Anuradhapura</h4>
                    <ul className="space-y-1 text-xs text-gray-700">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-1">•</span>
                        <span>Ancient royal cuisine traditions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-1">•</span>
                        <span>Special rice preparations</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Essential Food Experience Tips for Foreigners */}
      <section className="py-16 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4 lg:px-16 xl:px-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Essential Food Experience Tips for Foreigners 🌍
            </h2>
            
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-orange-600 mb-6">Before You Start Eating 🍴</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-l-4 border-orange-400 pl-4">
                  <h4 className="font-bold text-lg mb-2">Wash Your Hands!</h4>
                  <p className="text-gray-700 text-sm">
                    Many Sri Lankans eat with their hands, especially rice and curry. If you want to try this, 
                    always wash your hands first! Use your right hand only (left hand is considered unclean).
                  </p>
                </div>
                <div className="border-l-4 border-orange-400 pl-4">
                  <h4 className="font-bold text-lg mb-2">Start Small with Spice</h4>
                  <p className="text-gray-700 text-sm">
                    If you're not used to spicy food, start with small portions. You can always ask for more! 
                    Say "kakulu tikak" (less spicy) when ordering.
                  </p>
                </div>
                <div className="border-l-4 border-orange-400 pl-4">
                  <h4 className="font-bold text-lg mb-2">Bottled Water Only</h4>
                  <p className="text-gray-700 text-sm">
                    Stick to bottled or filtered water. Avoid tap water and ice in drinks unless you're at 
                    a reputable restaurant. This helps prevent stomach issues.
                  </p>
                </div>
                <div className="border-l-4 border-orange-400 pl-4">
                  <h4 className="font-bold text-lg mb-2">Ask Questions!</h4>
                  <p className="text-gray-700 text-sm">
                    Don't know what something is? Ask! Sri Lankans love to explain their food and are very 
                    happy when foreigners show interest in local cuisine.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-orange-600 mb-6">During Your Meal 🥘</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-2xl mr-3">🍚</span>
                  <div>
                    <h4 className="font-bold mb-1">How to Eat Rice & Curry</h4>
                    <p className="text-gray-700 text-sm">
                      Take small portions of different curries and mix them with rice on your plate. 
                      Don't pile everything at once - it's normal to take seconds! Mix well with your hand 
                      or spoon and enjoy the combination of flavors.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-3">🔥</span>
                  <div>
                    <h4 className="font-bold mb-1">Too Spicy? Quick Fixes!</h4>
                    <p className="text-gray-700 text-sm">
                      If food is too spicy, DON'T drink water! Instead, eat plain rice, yogurt (curd), or 
                      coconut milk. These help cool your mouth. Bread and banana also work well.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-3">👐</span>
                  <div>
                    <h4 className="font-bold mb-1">Eating With Your Hand</h4>
                    <p className="text-gray-700 text-sm">
                      Use your fingertips, not your whole hand! Take a small amount of rice and curry, 
                      compress it into a small ball with your fingers, and push it into your mouth with 
                      your thumb. It takes practice but locals will help you!
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-3">🥄</span>
                  <div>
                    <h4 className="font-bold mb-1">Utensils Are Fine Too!</h4>
                    <p className="text-gray-700 text-sm">
                      You don't have to eat with your hand! Asking for a spoon and fork is perfectly 
                      acceptable. Most restaurants have them ready.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-orange-600 mb-6">Spice Level Guide 🌶️</h3>
                
                <div className="mb-6">
                  <h4 className="font-bold text-lg mb-3 text-gray-900">For Beginners:</h4>
                  <p className="text-gray-700 text-sm mb-4">
                    Start with mild dishes like plain rice, dhal curry, and coconut sambol (just a tiny bit). 
                    Ask for 'less spicy' when ordering. Most restaurants are happy to adjust spice levels for tourists.
                  </p>
                  
                  <div className="bg-green-50 p-4 rounded-lg mb-4">
                    <p className="font-semibold text-sm mb-2 text-gray-900">Safe options:</p>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                      <li>Fried rice, noodles, grilled fish</li>
                      <li>Always have yogurt or coconut water nearby</li>
                      <li>Don't drink water immediately - it spreads the heat</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-3 text-gray-900">Building Tolerance:</h4>
                  <p className="text-gray-700 text-sm">
                    Gradually try spicier dishes over several days. Your taste buds will adapt! Sri Lankan 
                    cuisine has different types of heat - some burn, others are aromatic and warm.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-orange-600 mb-6">Dining Etiquette 🍽️</h3>
                
                <div className="mb-6">
                  <h4 className="font-bold text-lg mb-3 text-gray-900">Eating Style:</h4>
                  <p className="text-gray-700 text-sm">
                    Many Sri Lankans eat with their right hand, mixing rice and curry together. Don't worry - 
                    utensils are always available for tourists. Sharing food is common and shows friendship.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-3 text-gray-900">Best Practices:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      <p className="text-sm text-gray-700">Try a bit of everything on your plate</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      <p className="text-sm text-gray-700">It's okay to ask what ingredients are in a dish</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      <p className="text-sm text-gray-700">Finishing your food shows appreciation</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      <p className="text-sm text-gray-700">Tipping 10% is appreciated but not mandatory</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      <p className="text-sm text-gray-700">Take photos - locals love sharing their food culture!</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-orange-600 mb-6">Safety & Health Tips 💊</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 text-red-800">⚠️ Street Food Safety</h4>
                  <p className="text-sm text-gray-700">
                    Choose busy stalls with lots of locals - that means fresh food! Watch how food is 
                    prepared. Avoid raw salads and pre-cut fruits from street vendors.
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 text-green-800">✅ Safe Choices</h4>
                  <p className="text-sm text-gray-700">
                    Freshly cooked hot food is safest. Hoppers, kottu, and rice & curry made fresh are 
                    generally safe. Fruits you peel yourself are also good!
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 text-blue-800">💊 Just in Case</h4>
                  <p className="text-sm text-gray-700">
                    Bring anti-diarrhea medicine and antacids. Your stomach might need time to adjust to 
                    new spices. If you feel unwell, drink lots of bottled water and rest.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where to Experience Authentic Sri Lankan Food */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-16 xl:px-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Where to Experience Authentic Sri Lankan Food 📍
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-orange-100 to-orange-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-3">🏪</span>
                  <h3 className="font-bold text-2xl text-gray-900">Local "Hotels" (Restaurants)</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Don't be confused - in Sri Lanka, "hotel" often means a small local restaurant! These are 
                  the BEST places for authentic food. They serve fresh rice and curry daily.
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-sm font-semibold mb-2">What to Try:</p>
                  <p className="text-sm text-gray-700">Rice and curry lunch (usually Rs. 250-400), string hoppers 
                  for breakfast, and local sweets.</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-3">🌙</span>
                  <h3 className="font-bold text-2xl text-gray-900">Night Food Stalls</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Street food comes alive at night! Listen for the "chop chop" sound of kottu being made. 
                  These stalls are social gathering spots and serve delicious, cheap food.
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-sm font-semibold mb-2">What to Try:</p>
                  <p className="text-sm text-gray-700">Kottu roti, hoppers with egg, fried rice, and fresh fruit 
                  juices. Usually open 6pm-midnight.</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-100 to-green-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-3">🏡</span>
                  <h3 className="font-bold text-2xl text-gray-900">Home-Stay Experiences</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Want the MOST authentic experience? Stay with a local family! Many homestays offer cooking 
                  classes where you can learn to make Sri Lankan dishes.
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-sm font-semibold mb-2">What You'll Learn:</p>
                  <p className="text-sm text-gray-700">How to make curry from scratch, grind fresh coconut, and 
                  create traditional meals. Plus you get to eat what you cook!</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-3">🍴</span>
                  <h3 className="font-bold text-2xl text-gray-900">Traditional Restaurants</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Established restaurants offering traditional Sri Lankan cuisine in a comfortable setting. 
                  Great for first-timers who want authentic food with air conditioning!
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-sm font-semibold mb-2">Famous Spots:</p>
                  <p className="text-sm text-gray-700">Ministry of Crab (Colombo), Galle Face Hotel (Colombo), 
                  local restaurants in Galle Fort. More expensive but quality guaranteed.</p>
                </div>
              </div>
            </div>

            {/* <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-center">🎯 Pro Tips for Finding Great Food</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">✨ Follow the Locals</h4>
                  <p className="text-sm">
                    If a place is packed with Sri Lankans, the food is good and safe! Empty restaurants are 
                    often a red flag.
                  </p>
                </div>
                <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">⏰ Timing Matters</h4>
                  <p className="text-sm">
                    Lunch rice & curry is freshest 12-2pm. Hopper stalls are best in morning (7-9am) or 
                    evening (6-9pm). Kottu tastes best after 7pm!
                  </p>
                </div>
                <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">💬 Ask Your Hotel/Host</h4>
                  <p className="text-sm">
                    Your accommodation staff know the best local spots! They'll recommend hidden gems that 
                    tourists don't usually find.
                  </p>
                </div>
                <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">🗺️ Food Tours</h4>
                  <p className="text-sm">
                    Consider joining a food tour in Colombo or Galle. You'll try multiple dishes, learn 
                    about ingredients, and discover hidden spots!
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Helpful Tips Section */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Foodie Tips for Travelers 📝
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-3 text-gray-900">🌶️ About the Spice</h3>
                <p className="text-gray-700">
                  Sri Lankan food can be spicy! If you're not used to heat, always ask for "less spicy" 
                  or "mild". Most restaurants are happy to adjust the spice level for you.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-3 text-gray-900">🍚 Rice & Curry Etiquette</h3>
                <p className="text-gray-700">
                  It's perfectly normal to eat rice and curry with your right hand! Just wash your hands 
                  first. Or use a spoon - no one will judge!
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-3 text-gray-900">🏪 Where to Eat</h3>
                <p className="text-gray-700">
                  Try local restaurants and "rice & curry shops" for authentic experiences. Street food 
                  is generally safe - look for busy places with lots of locals!
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-3 text-gray-900">💰 Good Value</h3>
                <p className="text-gray-700">
                  Sri Lankan food is affordable! A full rice and curry meal costs around 300-500 LKR 
                  ($1-2 USD) at local restaurants. Street food is even cheaper!
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-3 text-gray-900">🥤 Stay Hydrated</h3>
                <p className="text-gray-700">
                  The spicy food might make you thirsty! Try king coconut water, fresh lime juice, 
                  or wood apple juice to cool down. Avoid tap water - stick to bottled water.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-3 text-gray-900">⏰ Meal Times</h3>
                <p className="text-gray-700">
                  Breakfast is usually 7-9am (hoppers, string hoppers). Lunch is noon-2pm (rice & curry). 
                  Dinner is 7-9pm. Many places serve kottu late into the night!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dietary Options Section */}
      <section className="py-16 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Special Dietary Needs? No Problem! 🥗
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-xl mb-3 text-green-700">🌱 Vegetarian & Vegan Options</h3>
                <p className="text-gray-700 mb-3">
                  Great news for vegetarians! Sri Lankan cuisine has tons of veggie options. Rice and curry 
                  meals always include multiple vegetable curries, dhal, and sambols. Just say "no meat, no fish" 
                  and you'll still have plenty to eat!
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Vegan tip:</strong> Ask for "no milk" or "no curd" in curries to make them vegan-friendly.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-xl mb-3 text-blue-700">🐟 Seafood Lovers</h3>
                <p className="text-gray-700">
                  Being an island nation, Sri Lanka has amazing seafood! Fresh fish curries, prawn dishes, 
                  crab curry, and squid are all fantastic. Coastal areas especially have great seafood options.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-xl mb-3 text-purple-700">🥜 Allergy Concerns</h3>
                <p className="text-gray-700">
                  Always inform the restaurant about allergies! Common ingredients to watch for: 
                  coconut (in almost everything), peanuts, cashews, and sesame. Most places are 
                  understanding and will help you choose safe options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Food Souvenirs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Take the Flavors Home! 🎁
            </h2>
            
            <p className="text-lg text-gray-700 mb-6 text-center">
              Want to recreate Sri Lankan flavors at home? Here's what you can buy:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-orange-50 p-5 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Ceylon Tea ☕</h3>
                <p className="text-sm text-gray-700">World-famous! Buy from tea factories or supermarkets.</p>
              </div>
              
              <div className="bg-orange-50 p-5 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Curry Powder 🌶️</h3>
                <p className="text-sm text-gray-700">Authentic roasted curry powder - the secret to Sri Lankan flavor!</p>
              </div>
              
              <div className="bg-orange-50 p-5 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Kiri Pani (Milk Toffee) 🍬</h3>
                <p className="text-sm text-gray-700">Sweet and delicious! Makes great gifts.</p>
              </div>
              
              <div className="bg-orange-50 p-5 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Ceylon Cinnamon 🌿</h3>
                <p className="text-sm text-gray-700">Real cinnamon from Sri Lanka - superior quality!</p>
              </div>
              
              <div className="bg-orange-50 p-5 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Treacle & Jaggery 🍯</h3>
                <p className="text-sm text-gray-700">Natural palm syrup and palm sugar - unique sweeteners!</p>
              </div>
              
              <div className="bg-orange-50 p-5 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Spices 🧂</h3>
                <p className="text-sm text-gray-700">Cardamom, cloves, pepper - all fresh from Sri Lanka!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Taste Sri Lanka? 🌴
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-orange-100">
            Sri Lankan cuisine is an adventure for your taste buds! From spicy curries to sweet treats, 
            every meal is a new experience. Don't be shy - try everything and discover your favorites!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/tours" 
              className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-50 transition-colors"
            >
              Book a Food Tour
            </a>
            <a 
              href="/contact-us" 
              className="bg-orange-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-800 transition-colors border-2 border-white"
            >
              Plan Your Trip
            </a>
          </div>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="py-12 bg-orange-50">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
            Fun Food Facts! 🤓
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-5 rounded-lg shadow text-center">
              <div className="text-3xl mb-2">🥥</div>
              <p className="text-sm text-gray-700">
                Sri Lankans use coconut in over 50 different ways in cooking!
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow text-center">
              <div className="text-3xl mb-2">🌶️</div>
              <p className="text-sm text-gray-700">
                The "Carolina Reaper" (world's hottest chili) has roots in Sri Lankan varieties!
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow text-center">
              <div className="text-3xl mb-2">🍛</div>
              <p className="text-sm text-gray-700">
                A traditional rice & curry meal can have 15-20 different dishes on one plate!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
