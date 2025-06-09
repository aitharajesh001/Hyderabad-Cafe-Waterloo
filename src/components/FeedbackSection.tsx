
import React, { useState } from 'react';

const FeedbackSection = () => {
  const [feedback, setFeedback] = useState({
    name: '',
    rating: 5,
    comments: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Feedback submitted:', feedback);
    // Here you would send the feedback to your backend
    alert('Thank you for your feedback!');
    setFeedback({ name: '', rating: 5, comments: '' });
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Share Your Experience
            </h2>
            <p className="text-xl text-muted-foreground">
              We value your feedback and strive to improve your dining experience
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={feedback.name}
                onChange={(e) => setFeedback(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            <div>
              <label htmlFor="rating" className="block text-sm font-medium text-foreground mb-2">
                Rating
              </label>
              <select
                id="rating"
                value={feedback.rating}
                onChange={(e) => setFeedback(prev => ({ ...prev, rating: parseInt(e.target.value) }))}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value={5}>⭐⭐⭐⭐⭐ Excellent</option>
                <option value={4}>⭐⭐⭐⭐ Very Good</option>
                <option value={3}>⭐⭐⭐ Good</option>
                <option value={2}>⭐⭐ Fair</option>
                <option value={1}>⭐ Poor</option>
              </select>
            </div>

            <div>
              <label htmlFor="comments" className="block text-sm font-medium text-foreground mb-2">
                Comments
              </label>
              <textarea
                id="comments"
                rows={5}
                value={feedback.comments}
                onChange={(e) => setFeedback(prev => ({ ...prev, comments: e.target.value }))}
                placeholder="Tell us about your experience..."
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
