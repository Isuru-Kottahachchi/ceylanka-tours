import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "King Ravana: The Mighty King of Lanka - Powers, Legend & History | Sri Lanka",
  description: "Discover the fascinating story of King Ravana, the legendary ruler of ancient Lanka. Learn about his ten heads, incredible powers, flying chariot Pushpaka Vimana, and his role in the Ramayana epic.",
  keywords: "King Ravana, Ravana Sri Lanka, Ramayana, Lanka king, ten headed king, Pushpaka Vimana, ancient Sri Lanka, Ravana powers, Danigala, Ravana caves",
}

export default function KingRavanaPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <Badge className="bg-white/20 text-white border-none">Ancient History</Badge>
            <Badge className="bg-white/20 text-white border-none">Mythology</Badge>
            <Badge className="bg-white/20 text-white border-none">Sri Lankan Heritage</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            👑 King Ravana: The Mighty Emperor of Ancient Lanka
          </h1>
          <p className="text-xl text-white/90">
            Unveiling the Legend of the Ten-Headed King - His Powers, Wisdom, and Legacy
          </p>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-l-yellow-500 p-4 rounded">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <strong>📌 Disclaimer:</strong> This article presents King Ravana as described in ancient texts like the Ramayana and local Sri Lankan folklore. Different cultures and traditions may have varying interpretations of this legendary figure. We present historical, mythological, and cultural perspectives for educational purposes.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        
        {/* Introduction */}
        <section className="mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Who Was King Ravana?</h2>
            
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="relative w-full md:w-2/5 h-80">
                <Image
                  src="/King-Ravana.png"
                  alt="King Ravana Statue"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              
              <div className="flex-1">
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  King Ravana, known as <strong>Ravana Raja</strong> in Sri Lanka, was the legendary emperor who ruled the ancient kingdom of Lanka thousands of years ago. He is one of the most powerful and complex characters in the great Indian epic, the <strong>Ramayana</strong>.
                </p>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Unlike the simple villain portrayed in some versions of the story, Ravana was actually a <strong>brilliant scholar, expert musician, powerful warrior, and devoted follower of Lord Shiva</strong>. He was so knowledgeable that even his enemies respected his wisdom.
                </p>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  In Sri Lankan culture, Ravana is often remembered not just as a character from mythology, but as a <strong>great king who brought prosperity, advancement in medicine, and technological wonders</strong> to his kingdom.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Famous Ten Heads */}
        <section className="mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">🎭 The Mystery of the Ten Heads</h2>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Ravana is most famously known for having <strong>ten heads and twenty arms</strong>. But what did this really mean?
                </p>
                
                <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg mb-4">
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-3">What the Ten Heads Represented:</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">•</span>
                      <span><strong>Knowledge of the Four Vedas and Six Shastras:</strong> Ancient Hindu scriptures and philosophical texts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">•</span>
                      <span><strong>Master of Multiple Subjects:</strong> Each head symbolized expertise in different fields like warfare, medicine, astrology, and arts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">•</span>
                      <span><strong>Supreme Intelligence:</strong> His ten heads showed he could think from multiple perspectives at once</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">•</span>
                      <span><strong>Control Over Directions:</strong> He had power over all ten directions of the universe</span>
                    </li>
                  </ul>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Some scholars believe the ten heads were symbolic rather than physical, representing his vast knowledge. Others say it was a divine boon he received after years of intense meditation and sacrifice.
                </p>
              </div>
              
              <div className="relative w-full md:w-2/5 h-96">
                <Image
                  src="/images/ten-headed-ravana.jpg"
                  alt="Ravana with Ten Heads"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Did You Know Card 1 */}
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-lg shadow-lg mb-8">
          <h3 className="text-xl font-bold mb-2">🤔 Did You Know?</h3>
          <p className="text-white/90">
            Ravana once lifted the entire Mount Kailash (home of Lord Shiva) with his bare hands! When Shiva pressed his toe down on the mountain, Ravana was trapped for thousands of years. To seek forgiveness, he composed the famous "Shiva Tandava Stotram" - a powerful hymn that is still recited today.
          </p>
        </div>

        {/* Physical Appearance */}
        <section className="mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">👤 Ravana's Appearance and Form</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-4">Physical Features</h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 text-xl">👑</span>
                    <div>
                      <strong>Ten Heads (Dasa Shirsha):</strong> Each head adorned with a golden crown
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 text-xl">💪</span>
                    <div>
                      <strong>Twenty Arms (Vimsa Bhuja):</strong> Incredibly strong arms that could wield multiple weapons at once
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 text-xl">⚡</span>
                    <div>
                      <strong>Coppery-Red Eyes:</strong> Burning with intensity and power
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 text-xl">🌟</span>
                    <div>
                      <strong>Dark Complexion:</strong> Described as having a radiant dark blue or black complexion
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 text-xl">👔</span>
                    <div>
                      <strong>Royal Attire:</strong> Dressed in magnificent robes, jewels, and ornaments befitting an emperor
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-4">Height and Build</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Ancient texts describe Ravana as being <strong>extraordinarily tall</strong> - some accounts say he stood over 12 feet tall! His massive frame and muscular build made him appear like a moving mountain.
                </p>
                
                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-4 mt-6">Divine Marks</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">•</span>
                    <span>Sacred marks on his body from years of intense meditation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">•</span>
                    <span>Scars from battles with gods and demons</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">•</span>
                    <span>A naturally intimidating and awe-inspiring presence</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Supernatural Powers */}
        <section className="mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">⚡ Ravana's Incredible Powers and Abilities</h2>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Ravana was not an ordinary king. Through years of intense penance (tapasya), he gained incredible powers from the gods themselves. Here are his most remarkable abilities:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-lg border-l-4 border-red-500">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">🛡️ Invincibility Boon</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Ravana performed such extreme penance that Brahma (the creator god) granted him invincibility from gods, demons, and celestial beings. However, in his arrogance, Ravana never asked for protection from humans and animals - which became his downfall!
                </p>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">🔮 Shapeshifting (Maya)</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  He could change his form at will - appearing as a holy man, a beautiful deer, or any creature he desired. This power of illusion made him extremely dangerous.
                </p>
              </div>
              
              <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg border-l-4 border-green-500">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">✈️ Flight and Levitation</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Ravana could fly through the air without any vehicle. He could also levitate and move mountains with his mind.
                </p>
              </div>
              
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-lg border-l-4 border-yellow-500">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">🌪️ Control Over Elements</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  He commanded fire, water, wind, and earth. He could create storms, cause earthquakes, and summon rain.
                </p>
              </div>
              
              <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-lg border-l-4 border-purple-500">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">💪 Superhuman Strength</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  With twenty arms, he could wield multiple divine weapons simultaneously. He defeated powerful gods in battle and conquered the heavens.
                </p>
              </div>
              
              <div className="bg-pink-50 dark:bg-pink-900/20 p-5 rounded-lg border-l-4 border-pink-500">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">🧠 Extraordinary Intelligence</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Master of the four Vedas, six Shastras, 64 arts, astronomy, astrology, medicine, and warfare. He could predict the future through his knowledge of stars.
                </p>
              </div>
              
              <div className="bg-orange-50 dark:bg-orange-900/20 p-5 rounded-lg border-l-4 border-orange-500">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">🎵 Divine Music</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  An exceptional veena (stringed instrument) player. Legend says he once played music so beautiful that even Lord Shiva was moved.
                </p>
              </div>
              
              <div className="bg-indigo-50 dark:bg-indigo-900/20 p-5 rounded-lg border-l-4 border-indigo-500">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">⚕️ Advanced Medicine</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Expert in Ayurveda (ancient medicine). He wrote medical texts and could cure diseases that others couldn't.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Did You Know Card 2 */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg shadow-lg mb-8">
          <h3 className="text-xl font-bold mb-2">🤔 Did You Know?</h3>
          <p className="text-white/90">
            Ravana was so devoted to Lord Shiva that he once offered his own heads as a sacrifice! After cutting off nine of his heads, Lord Shiva appeared and restored them, blessing Ravana with even greater powers. This is why Ravana is also called "Dashamukha" or "Dasakantha" (ten-faced one).
          </p>
        </div>

        {/* Pushpaka Vimana */}
        <section className="mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">✈️ Pushpaka Vimana: The Flying Palace</h2>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="relative w-full md:w-2/5 h-80">
                <Image
                  src="/images/pushpaka-vimana.jpg"
                  alt="Pushpaka Vimana Flying Chariot"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              
              <div className="flex-1">
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  One of the most fascinating aspects of the Ravana legend is his incredible flying vehicle - the <strong>Pushpaka Vimana</strong> (Pushpaka means "flowery" and Vimana means "vehicle" or "palace").
                </p>
                
                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-3">What Made It Special?</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">✓</span>
                    <span><strong>Self-Propelled:</strong> It could fly on its own, powered by some mysterious ancient technology</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">✓</span>
                    <span><strong>Thought-Controlled:</strong> The Vimana responded to the pilot's thoughts and commands</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">✓</span>
                    <span><strong>Adjustable Size:</strong> It could expand to carry an entire army or shrink for a single person</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">✓</span>
                    <span><strong>Luxurious Interior:</strong> Equipped with comfortable seats, gardens, fountains, and all royal comforts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">✓</span>
                    <span><strong>Speed:</strong> Could travel anywhere in the world within moments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">✓</span>
                    <span><strong>Golden Construction:</strong> Made of gold and precious gems that glittered in the sky</span>
                  </li>
                </ul>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    <strong>Origin:</strong> Originally created by Vishwakarma (the divine architect) for Kubera (god of wealth), Ravana conquered and took it for himself. After Ravana's defeat, Lord Rama used it to return to his kingdom!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Great Works and Achievements */}
        <section className="mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">🏗️ Ravana's Great Works and Achievements</h2>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Beyond the stories of war, Ravana was a remarkable king who brought unprecedented prosperity and advancement to his kingdom:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-lg">
                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-3">🏛️ Infrastructure and Architecture</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                  <li>• Built the magnificent golden city of Lanka with towering palaces</li>
                  <li>• Created advanced irrigation systems and water management</li>
                  <li>• Constructed airports (vimana stands) for flying vehicles</li>
                  <li>• Developed roads, bridges, and public facilities</li>
                  <li>• Built the famous Sigiriya fortress according to some legends</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg">
                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-3">📚 Education and Knowledge</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                  <li>• Established libraries and centers of learning</li>
                  <li>• Authored books on medicine, astrology, and warfare</li>
                  <li>• Wrote the "Ravana Samhita" - an ancient book on astrology</li>
                  <li>• Composed devotional music and hymns</li>
                  <li>• Promoted arts, music, and literature</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-lg">
                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-3">⚕️ Medical Advances</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                  <li>• Developed advanced surgical techniques</li>
                  <li>• Created herbal medicines and treatments</li>
                  <li>• Understood anatomy and physiology deeply</li>
                  <li>• Trained physicians in Ayurvedic medicine</li>
                  <li>• Established hospitals and healing centers</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg">
                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-3">🔬 Technology and Innovation</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                  <li>• Advanced knowledge of aeronautics (flying machines)</li>
                  <li>• Sophisticated weapons and defense systems</li>
                  <li>• Understanding of astronomy and planetary movements</li>
                  <li>• Agricultural innovations and farming techniques</li>
                  <li>• Mining and metallurgy expertise</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Did You Know Card 3 */}
        <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white p-6 rounded-lg shadow-lg mb-8">
          <h3 className="text-xl font-bold mb-2">🤔 Did You Know?</h3>
          <p className="text-white/90">
            Ravana's golden city of Lanka was described as so beautiful and advanced that it made even the cities of gods seem ordinary. The streets were paved with gems, buildings made of gold, and the city had automatic defense systems. Some researchers today wonder if these descriptions hint at an ancient advanced civilization!
          </p>
        </div>

        {/* Ravana in the Ramayana */}
        <section className="mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">📖 Ravana in the Ramayana Epic</h2>
            
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="flex-1">
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  The Ramayana tells the story of how Ravana's one mistake led to his downfall:
                </p>
                
                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-3">The Turning Point</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Ravana fell in love with <strong>Sita</strong>, the wife of Prince Rama. When she rejected him, his ego couldn't accept it. Using his powers of illusion, he kidnapped her and brought her to Lanka.
                </p>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  This one act of arrogance brought about the greatest war in ancient history - <strong>the Battle of Lanka</strong>.
                </p>
                
                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-3">The Great War</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">⚔️</span>
                    <span>Prince Rama, helped by the monkey army led by Hanuman, built a bridge to Lanka</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">⚔️</span>
                    <span>The war lasted for months with incredible battles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">⚔️</span>
                    <span>Ravana's brothers and sons fought valiantly but were defeated</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">⚔️</span>
                    <span>Even when defeated, Ravana's heads would grow back!</span>
                  </li>
                </ul>
              </div>
              
              <div className="relative w-full md:w-2/5 h-96">
                <Image
                  src="/images/rama-ravana-battle.jpg"
                  alt="Rama vs Ravana Battle"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            
            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
              <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-3">The Final Moment</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Finally, Rama used a special divine arrow blessed by the gods. The arrow struck Ravana in his heart - the one place where his life force resided. As Ravana fell, he acknowledged Rama's righteousness and accepted his defeat with dignity. Even in death, his knowledge and devotion to Shiva were respected by his enemies.
              </p>
            </div>
          </div>
        </section>

        {/* Ravana's Family */}
        <section className="mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">👨‍👩‍👧‍👦 Ravana's Family and Lineage</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-lg">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-3">Parents</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                  <strong>Father:</strong> Vishrava (a learned sage)
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <strong>Mother:</strong> Kaikasi (a demon princess)
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-xs mt-2">
                  This made Ravana half Brahmin (scholar) and half demon!
                </p>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-3">Siblings</h3>
                <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-1">
                  <li>• <strong>Kumbhakarna:</strong> Giant brother who slept for months</li>
                  <li>• <strong>Vibhishana:</strong> Righteous brother who joined Rama</li>
                  <li>• <strong>Shurpanakha:</strong> Sister whose insult started the conflict</li>
                </ul>
              </div>
              
              <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-3">Children</h3>
                <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-1">
                  <li>• <strong>Meghanada (Indrajit):</strong> Most powerful son who defeated Indra</li>
                  <li>• <strong>Akshayakumara:</strong> Brave warrior son</li>
                  <li>• Several other sons and a daughter</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Ravana Sites in Sri Lanka */}
        <section className="mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">📍 Ravana Sites in Sri Lanka</h2>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Many places in Sri Lanka are connected to the Ravana legend. You can visit these fascinating sites today:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-900/20 p-5 rounded">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">🏔️ Ravana Falls</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  A stunning waterfall near Ella, believed to be where Ravana bathed. One of Sri Lanka's widest waterfalls.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20 p-5 rounded">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">🕳️ Ravana Cave (Ella)</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  A massive cave complex where, according to legend, Ravana hid Sita after kidnapping her.
                </p>
              </div>
              
              <div className="border-l-4 border-green-500 bg-green-50 dark:bg-green-900/20 p-5 rounded">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">⛰️ Sita Amman Temple</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Hindu temple believed to mark the spot where Sita was held captive in the Ashoka Vatika (garden).
                </p>
              </div>
              
              <div className="border-l-4 border-purple-500 bg-purple-50 dark:bg-purple-900/20 p-5 rounded">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">✈️ Weragantota (Mahiyangana)</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Believed to be an ancient airport where Ravana's Pushpaka Vimana landed!
                </p>
              </div>
              
              <div className="border-l-4 border-red-500 bg-red-50 dark:bg-red-900/20 p-5 rounded">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">🏰 Ravana's Palace (Sigiriya)</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Some believe the magnificent Sigiriya rock fortress was actually built by Ravana, not King Kashyapa.
                </p>
              </div>
              
              <div className="border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">🗿 Danigala (Ravana's Cliff)</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  A challenging rock climb where legend says Ravana meditated and performed rituals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Did You Know Card 4 */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 rounded-lg shadow-lg mb-8">
          <h3 className="text-xl font-bold mb-2">🤔 Did You Know?</h3>
          <p className="text-white/90">
            In Thailand, Ravana (called "Tosakanth") is not seen as a villain but as a complex anti-hero. In some parts of India, people worship him for his devotion to Shiva. In Sri Lanka, he's remembered as a great king. The same character, three different perspectives!
          </p>
        </div>

        {/* Different Perspectives */}
        <section className="mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">🌏 Different Views of Ravana</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 p-6 rounded-lg">
                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-4">✅ Positive Aspects</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                  <li>• One of the greatest scholars who ever lived</li>
                  <li>• Devoted follower of Lord Shiva</li>
                  <li>• Excellent administrator and king</li>
                  <li>• Advanced his kingdom in science, medicine, and technology</li>
                  <li>• Brave warrior who never backed down</li>
                  <li>• Loving brother, father, and husband</li>
                  <li>• Never touched Sita without her consent despite having the power</li>
                  <li>• Accepted his defeat with dignity</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-red-100 to-orange-100 dark:from-red-900/30 dark:to-orange-900/30 p-6 rounded-lg">
                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-4">❌ Negative Aspects</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                  <li>• Extreme arrogance and ego</li>
                  <li>• Kidnapped Sita against her will</li>
                  <li>• Used his powers for selfish desires</li>
                  <li>• Ignored wise counsel from his brother Vibhishana</li>
                  <li>• His pride led to the destruction of his kingdom</li>
                  <li>• Refused to admit his mistakes</li>
                  <li>• Put his desires above his people's welfare</li>
                  <li>• Despite all knowledge, couldn't control his ego</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 bg-gray-100 dark:bg-gray-900 p-6 rounded-lg">
              <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-3">The Lesson of Ravana</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Ravana's story teaches us that <strong>knowledge and power without humility and righteousness are meaningless</strong>. He had everything - intelligence, strength, devotion, wealth - but his ego destroyed it all. Even the greatest can fall if they let pride rule over wisdom.
              </p>
            </div>
          </div>
        </section>

        {/* Modern Interpretations */}
        <section className="mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">🔬 Modern Questions About Ravana</h2>
            
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">❓ Was the Pushpaka Vimana an ancient aircraft?</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Some researchers wonder if the detailed descriptions of the flying palace suggest advanced ancient technology. The Vimana Shastra (ancient texts) contain what seem like technical specifications!
                </p>
              </div>
              
              <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">❓ Did Lanka have advanced civilization?</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Descriptions of golden cities, automatic defenses, advanced medicine, and sophisticated weapons make people wonder if an advanced civilization existed in ancient Sri Lanka.
                </p>
              </div>
              
              <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-lg">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">❓ Was Ravana a real historical figure?</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  While most consider him mythological, the numerous places in Sri Lanka connected to him, ancient texts mentioning him, and Sri Lankan folk traditions suggest he might have been based on a real ancient king.
                </p>
              </div>
              
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-lg">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">❓ What about his ten heads?</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Scholars debate whether this was literal or symbolic. It might have represented his vast knowledge, or it could be an artistic way to show his power and wisdom.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6">🎯 The Legacy of King Ravana</h2>
            
            <p className="text-white/90 mb-4 leading-relaxed">
              King Ravana remains one of the most complex and fascinating characters in world mythology. He was not simply a villain - he was a brilliant scholar, devoted worshipper, loving family man, and powerful king whose one fatal flaw (his pride) led to his downfall.
            </p>
            
            <p className="text-white/90 mb-4 leading-relaxed">
              Whether you see him as a great king of ancient Lanka or as a cautionary tale about ego and desire, Ravana's story has captivated people for thousands of years and continues to do so today.
            </p>
            
            <p className="text-white/90 leading-relaxed">
              When you visit Sri Lanka and see the waterfalls, caves, and ancient sites bearing his name, remember that you're walking through lands steeped in one of humanity's oldest and most powerful legends. 🏔️✨
            </p>
          </div>
        </section>

        {/* Final Did You Know */}
        <div className="bg-gradient-to-r from-pink-500 to-rose-600 text-white p-6 rounded-lg shadow-lg mb-8">
          <h3 className="text-xl font-bold mb-2">🎵 Final Fascinating Fact!</h3>
          <p className="text-white/90">
            The "Shiva Tandava Stotram" that Ravana composed is considered one of the most powerful hymns in Hinduism. Even today, thousands of years later, musicians and devotees sing this beautiful praise of Lord Shiva. Ravana may have been defeated in war, but his devotional music lives on forever!
          </p>
        </div>

      </div>
    </div>
  )
}