import React, { useState } from 'react';
import { 
  Smile, 
  Heart, 
  Dumbbell, 
  Video, 
  ChevronRight, 
  MessagesSquare, 
  Phone,
  Users,
  Facebook,
  MessageCircle
} from 'lucide-react';

function ContactModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4">
        <h3 className="text-2xl font-bold mb-4">Choose Contact Method</h3>
        <div className="space-y-4">
          <a
            href="https://m.me/your-facebook-page"
            className="flex items-center justify-between w-full p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Facebook className="h-6 w-6 text-blue-600" />
              <span className="font-medium">Facebook Messenger</span>
            </div>
            <ChevronRight className="h-5 w-5 text-blue-600" />
          </a>
          <a
            href="https://wa.me/12077190130"
            className="flex items-center justify-between w-full p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
          >
            <div className="flex items-center gap-3">
              <MessageCircle className="h-6 w-6 text-green-600" />
              <span className="font-medium">WhatsApp</span>
            </div>
            <ChevronRight className="h-5 w-5 text-green-600" />
          </a>
        </div>
        <button
          onClick={onClose}
          className="mt-6 w-full p-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

function App() {
  const [showContactModal, setShowContactModal] = useState(false);

  const handleBookSession = () => {
    setShowContactModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 pt-20 pb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-bold mb-6">
                Transform Your Face Through{' '}
                <span className="text-indigo-600">Facial Yoga</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Join our expert-led remote sessions and discover the natural way to tone, lift, and rejuvenate your face.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleBookSession}
                  className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors text-lg font-medium flex items-center justify-center"
                >
                  Start Free Trial
                  <ChevronRight className="ml-2 h-5 w-5" />
                </button>
                <button
                  onClick={handleBookSession}
                  className="inline-flex items-center justify-center px-8 py-3 rounded-lg border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition-colors text-lg font-medium"
                >
                  <Video className="h-5 w-5 mr-2" />
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=1470"
                alt="Woman applying facial oil"
                className="rounded-2xl shadow-2xl hover:scale-[1.02] transition-transform duration-300"
              />
              <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-xl shadow-xl hover:scale-105 transition-transform duration-300">
                <div className="flex items-center space-x-4">
                  <div className="bg-indigo-100 p-3 rounded-lg">
                    <Users className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">2,000+</p>
                    <p className="text-gray-600">Active Members</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Facial Yoga?</h2>
            <p className="text-xl text-gray-600">Experience natural facial rejuvenation through proven techniques</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Dumbbell className="h-8 w-8 text-indigo-600" />,
                title: "Muscle Strengthening",
                description: "Strengthen facial muscles and achieve a more lifted and toned appearance."
              },
              {
                icon: <Heart className="h-8 w-8 text-indigo-600" />,
                title: "Enhanced Blood Flow",
                description: "Boost circulation for a radiant and healthy complexion."
              },
              {
                icon: <Smile className="h-8 w-8 text-indigo-600" />,
                title: "Deep Relaxation",
                description: "Activate the parasympathetic nervous system, promoting relaxation."
              },
              {
                icon: <Video className="h-8 w-8 text-indigo-600" />,
                title: "Convenient Sessions",
                description: "Remote sessions via Zoom at a fraction of the cost of in-person treatments."
              }
            ].map((benefit, index) => (
              <div key={index} className="p-8 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 hover:scale-105 transition-transform duration-300">
                <div className="bg-white p-4 rounded-lg inline-block mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Pay after service - satisfaction guaranteed!</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "7 Day Program",
                price: "$150",
                duration: "per week",
                features: [
                  "40 Minute Sessions",
                  "Free Device After 2 Weeks",
                  "Daily Progress Tracking",
                  "Premium Support"
                ]
              },
              {
                name: "4 Day Program",
                price: "$60",
                duration: "per week",
                features: [
                  "25 Minute Sessions",
                  "Progress Tracking",
                  "Personalized Routine",
                  "Regular Support"
                ]
              },
              {
                name: "2 Day Program",
                price: "$30",
                duration: "per week",
                features: [
                  "20 Minute Sessions",
                  "Basic Progress Tracking",
                  "Standard Routine",
                  "Email Support"
                ]
              },
              {
                name: "Trial Session",
                price: "$10",
                duration: "one-time",
                features: [
                  "20 Minute Session",
                  "Basic Assessment",
                  "Technique Introduction",
                  "Q&A Session"
                ]
              }
            ].map((plan, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-600">/{plan.duration}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-indigo-600 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={handleBookSession}
                  className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-gray-600">
            Available from 6AM to 10PM CST • All times available
          </p>
        </div>
      </section>

      <ContactModal 
        isOpen={showContactModal} 
        onClose={() => setShowContactModal(false)} 
      />
    </div>
  );
}

export default App;