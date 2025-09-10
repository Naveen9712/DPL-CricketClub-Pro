import React, { useState } from 'react';
import { Users, CreditCard, CheckCircle, User, Phone, Mail, MapPin, Trophy, Settings, Menu, X } from 'lucide-react';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  address: string;
  position: string;
  experience: string;
  previousClub: string;
  emergencyContact: string;
  emergencyPhone: string;
}

interface Application extends FormData {
  transactionId: string;
  applicationDate: string;
  id: number;
}

// Navigation Component - moved outside to prevent re-creation
const Navigation = ({ currentView, setCurrentView }: { currentView: string; setCurrentView: (view: string) => void }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Trophy className="w-6 h-6 sm:w-8 sm:h-8" />
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold">DPL CricketClub Pro</h1>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <button 
            onClick={() => setCurrentView('home')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
              currentView === 'home' ? 'bg-white/20' : 'hover:bg-white/10'
            }`}
          >
            <Trophy className="w-5 h-5" />
            <span>Home</span>
          </button>
          <button 
            onClick={() => setCurrentView('apply')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
              currentView === 'apply' ? 'bg-white/20' : 'hover:bg-white/10'
            }`}
          >
            <User className="w-5 h-5" />
            <span>Apply</span>
          </button>
          <button 
            onClick={() => setCurrentView('admin')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
              currentView === 'admin' ? 'bg-white/20' : 'hover:bg-white/10'
            }`}
          >
            <Settings className="w-5 h-5" />
            <span>Admin</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-all"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-white/20">
          <div className="flex flex-col space-y-2">
            <button 
              onClick={() => {
                setCurrentView('home');
                setIsMobileMenuOpen(false);
              }}
              className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-all ${
                currentView === 'home' ? 'bg-white/20' : 'hover:bg-white/10'
              }`}
            >
              <Trophy className="w-5 h-5" />
              <span>Home</span>
            </button>
            <button 
              onClick={() => {
                setCurrentView('apply');
                setIsMobileMenuOpen(false);
              }}
              className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-all ${
                currentView === 'apply' ? 'bg-white/20' : 'hover:bg-white/10'
              }`}
            >
              <User className="w-5 h-5" />
              <span>Apply</span>
            </button>
            <button 
              onClick={() => {
                setCurrentView('admin');
                setIsMobileMenuOpen(false);
              }}
              className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-all ${
                currentView === 'admin' ? 'bg-white/20' : 'hover:bg-white/10'
              }`}
            >
              <Settings className="w-5 h-5" />
              <span>Admin</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

// HomePage Component - moved outside
const HomePage = ({ setCurrentView }: { setCurrentView: (view: string) => void }) => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
    <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">Join Our DPL Cricket Club</h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
          Experience the thrill of cricket with professional coaching, modern facilities, and a passionate community of players.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
        <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 sm:mb-6">
            <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
          </div>
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Professional Training</h3>
          <p className="text-gray-600 text-sm sm:text-base">Get coached by experienced professionals and improve your cricket skills.</p>
        </div>
        
        <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 sm:mb-6">
            <Users className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
          </div>
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Great Community</h3>
          <p className="text-gray-600 text-sm sm:text-base">Join a vibrant community of cricket enthusiasts and make lasting friendships.</p>
        </div>
        
        <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow sm:col-span-2 lg:col-span-1">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 sm:mb-6">
            <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
          </div>
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Modern Facilities</h3>
          <p className="text-gray-600 text-sm sm:text-base">Practice and play in our state-of-the-art cricket facilities and grounds.</p>
        </div>
      </div>
      
      <div className="text-center">
        <button 
          onClick={() => setCurrentView('apply')}
          className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-lg sm:text-xl font-semibold hover:from-blue-700 hover:to-green-700 transition-all transform hover:scale-105 shadow-lg w-full sm:w-auto"
        >
          Apply Now - ₹300 Only
        </button>
      </div>
    </div>
  </div>
);

// ApplicationPage Component - moved outside
const ApplicationPage = ({ 
  paymentStep, 
  formData, 
  handleInputChange, 
  handleFormSubmit, 
  handlePaymentComplete, 
  setPaymentStep, 
  transactionId, 
  setTransactionId, 
  handleTransactionSubmit 
}: {
  paymentStep: number;
  formData: FormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleFormSubmit: () => void;
  handlePaymentComplete: () => void;
  setPaymentStep: (step: number) => void;
  transactionId: string;
  setTransactionId: (id: string) => void;
  handleTransactionSubmit: () => void;
}) => {
  if (paymentStep === 4) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg text-center max-w-md w-full">
          <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-green-500 mx-auto mb-3 sm:mb-4" />
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Application Submitted!</h2>
          <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Your cricket club application has been successfully submitted.</p>
          <p className="text-xs sm:text-sm text-gray-500">Redirecting to home...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-6 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
            <div className="mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-2">DPL Cricket Club Application</h2>
              <div className="flex items-center justify-between sm:justify-start sm:space-x-4">
                <div className={`flex items-center space-x-2 ${paymentStep >= 1 ? 'text-green-600' : 'text-gray-400'}`}>
                  <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-white text-sm sm:text-base ${paymentStep >= 1 ? 'bg-green-500' : 'bg-gray-300'}`}>1</div>
                  <span className="text-sm sm:text-base">Details</span>
                </div>
                <div className="w-4 sm:w-8 h-0.5 bg-gray-300"></div>
                <div className={`flex items-center space-x-2 ${paymentStep >= 2 ? 'text-green-600' : 'text-gray-400'}`}>
                  <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-white text-sm sm:text-base ${paymentStep >= 2 ? 'bg-green-500' : 'bg-gray-300'}`}>2</div>
                  <span className="text-sm sm:text-base">Payment</span>
                </div>
                <div className="w-4 sm:w-8 h-0.5 bg-gray-300"></div>
                <div className={`flex items-center space-x-2 ${paymentStep >= 3 ? 'text-green-600' : 'text-gray-400'}`}>
                  <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-white text-sm sm:text-base ${paymentStep >= 3 ? 'bg-green-500' : 'bg-gray-300'}`}>3</div>
                  <span className="text-sm sm:text-base">Confirm</span>
                </div>
              </div>
            </div>

            {paymentStep === 1 && (
              <div className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-base"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-base"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-base"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth *</label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-base"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Address *</label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none text-base"
                    placeholder="Enter your complete address"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Position *</label>
                    <select
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-base"
                    >
                      <option value="">Select Position</option>
                      <option value="Batsman">Batsman</option>
                      <option value="Bowler">Bowler</option>
                      <option value="All-rounder">All-rounder</option>
                      <option value="Wicket-keeper">Wicket-keeper</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Years of Experience</label>
                    <input
                      type="number"
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-base"
                      min="0"
                      placeholder="0"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Previous Club (if any)</label>
                  <input
                    type="text"
                    name="previousClub"
                    value={formData.previousClub}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-base"
                    placeholder="Enter previous club name"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Emergency Contact Name *</label>
                    <input
                      type="text"
                      name="emergencyContact"
                      value={formData.emergencyContact}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-base"
                      placeholder="Emergency contact name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Emergency Contact Phone *</label>
                    <input
                      type="tel"
                      name="emergencyPhone"
                      value={formData.emergencyPhone}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-base"
                      placeholder="Emergency contact phone"
                    />
                  </div>
                </div>

                <button
                  onClick={handleFormSubmit}
                  className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all transform hover:scale-105 text-base"
                >
                  Proceed to Payment
                </button>
              </div>
            )}

            {paymentStep === 2 && (
              <div className="text-center space-y-4 sm:space-y-6">
                <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">Payment Required</h3>
                  <p className="text-gray-600 mb-3 sm:mb-4">Enrollment Fee: <span className="text-xl sm:text-2xl font-bold text-green-600">₹300</span></p>
                  
                  <div className="bg-white rounded-lg p-4 sm:p-6 shadow-inner">
                    <h4 className="font-semibold text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">Scan QR Code to Pay</h4>
                    <div className="w-40 h-40 sm:w-48 sm:h-48 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg mx-auto flex items-center justify-center mb-3 sm:mb-4 border-2 border-dashed border-gray-300">
                      <div className="text-center text-gray-600">
                        <CreditCard className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2" />
                        <p className="text-xs sm:text-sm font-semibold">QR Code</p>
                        <p className="text-xs">Amount: ₹300</p>
                        <p className="text-xs mt-1">UPI Payment</p>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Use any UPI app to scan and pay ₹300
                    </p>
                  </div>
                </div>

                <button
                  onClick={handlePaymentComplete}
                  className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-all text-base"
                >
                  I've Completed the Payment
                </button>

                <button
                  onClick={() => setPaymentStep(1)}
                  className="w-full text-gray-600 py-2 px-6 rounded-lg hover:bg-gray-100 transition-all text-base"
                >
                  Back to Form
                </button>
              </div>
            )}

            {paymentStep === 3 && (
              <div className="space-y-4 sm:space-y-6">
                <div className="text-center">
                  <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-green-500 mx-auto mb-3 sm:mb-4" />
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Almost Done!</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Please enter your transaction ID to complete the application.</p>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Transaction ID *</label>
                    <input
                      type="text"
                      value={transactionId}
                      onChange={(e) => setTransactionId(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-base"
                      placeholder="Enter your UPI transaction ID"
                    />
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">
                      You can find this in your UPI app's transaction history
                    </p>
                  </div>

                  <button
                    onClick={handleTransactionSubmit}
                    className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all transform hover:scale-105 text-base"
                  >
                    Submit Application
                  </button>

                  <button
                    onClick={() => setPaymentStep(2)}
                    className="w-full text-gray-600 py-2 px-6 rounded-lg hover:bg-gray-100 transition-all text-base"
                  >
                    Back to Payment
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// AdminPage Component - moved outside
const AdminPage = ({ applications }: { applications: Application[] }) => (
  <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-6 sm:py-12">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8 gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Admin Dashboard</h2>
          <div className="bg-blue-100 px-3 sm:px-4 py-2 rounded-lg">
            <span className="text-blue-800 font-semibold text-sm sm:text-base">Total Applications: {applications.length}</span>
          </div>
        </div>

        {applications.length === 0 ? (
          <div className="text-center py-8 sm:py-12">
            <Users className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 mx-auto mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold text-gray-600 mb-2">No Applications Yet</h3>
            <p className="text-gray-500 text-sm sm:text-base">Applications will appear here once players start registering.</p>
          </div>
        ) : (
          <div className="space-y-4 sm:space-y-6">
            {applications.map((app) => (
              <div key={app.id} className="border border-gray-200 rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 text-base sm:text-lg mb-2">{app.fullName}</h4>
                    <p className="text-xs sm:text-sm text-gray-600 flex items-center mb-1">
                      <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                      {app.email}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 flex items-center">
                      <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                      {app.phone}
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600 mb-1">
                      <strong>Position:</strong> {app.position}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 mb-1">
                      <strong>Experience:</strong> {app.experience || '0'} years
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600">
                      <strong>Previous Club:</strong> {app.previousClub || 'None'}
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600 mb-1">
                      <strong>Applied:</strong> {app.applicationDate}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 mb-1 break-all">
                      <strong>Transaction ID:</strong> {app.transactionId}
                    </p>
                    <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                      Paid ₹300
                    </span>
                  </div>
                </div>
                
                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200">
                  <p className="text-xs sm:text-sm text-gray-600">
                    <strong>Address:</strong> {app.address}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">
                    <strong>Emergency Contact:</strong> {app.emergencyContact} ({app.emergencyPhone})
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  </div>
);

// Main Component
const CricketApplicationWebsite = () => {
  const [currentView, setCurrentView] = useState('home');
  const [applications, setApplications] = useState<Application[]>([]);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    address: '',
    position: '',
    experience: '',
    previousClub: '',
    emergencyContact: '',
    emergencyPhone: ''
  });
  const [paymentStep, setPaymentStep] = useState(1);
  const [transactionId, setTransactionId] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    const requiredFields: (keyof FormData)[] = ['fullName', 'email', 'phone', 'dateOfBirth', 'address', 'position', 'emergencyContact', 'emergencyPhone'];
    return requiredFields.every(field => formData[field] && String(formData[field]).trim());
  };

  const handleFormSubmit = () => {
    if (validateForm()) {
      setPaymentStep(2);
    } else {
      alert('Please fill all required fields');
    }
  };

  const handlePaymentComplete = () => {
    setPaymentStep(3);
  };

  const handleTransactionSubmit = () => {
    if (transactionId.trim()) {
      const newApplication = {
        ...formData,
        transactionId,
        applicationDate: new Date().toLocaleString(),
        id: Date.now()
      };
      setApplications([...applications, newApplication]);
      setPaymentStep(4);
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          dateOfBirth: '',
          address: '',
          position: '',
          experience: '',
          previousClub: '',
          emergencyContact: '',
          emergencyPhone: ''
        });
        setTransactionId('');
        setPaymentStep(1);
        setCurrentView('home');
      }, 3000);
    } else {
      alert('Please enter the transaction ID');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation currentView={currentView} setCurrentView={setCurrentView} />
      {currentView === 'home' && <HomePage setCurrentView={setCurrentView} />}
      {currentView === 'apply' && (
        <ApplicationPage
          paymentStep={paymentStep}
          formData={formData}
          handleInputChange={handleInputChange}
          handleFormSubmit={handleFormSubmit}
          handlePaymentComplete={handlePaymentComplete}
          setPaymentStep={setPaymentStep}
          transactionId={transactionId}
          setTransactionId={setTransactionId}
          handleTransactionSubmit={handleTransactionSubmit}
        />
      )}
      {currentView === 'admin' && <AdminPage applications={applications} />}
    </div>
  );
};

export default CricketApplicationWebsite;