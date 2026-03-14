// FairnessHandler - Queue fairness management for restaurant waitlist
// Ensures no customer is left waiting too long by analyzing wait times,
// applying fairness boosts, and preventing starvation in the queue.

class FairnessHandler {
  constructor(options = {}) {
    // Maximum allowed wait time in minutes before starvation prevention kicks in
    this.maxAllowedWait = options.maxAllowedWait || 60;
    // Priority boost applied to starving entries
    this.starvationBoost = options.starvationBoost || 50;
    // Fairness boost factor per minute of wait time
    this.fairnessBoostPerMinute = options.fairnessBoostPerMinute || 0.5;
  }

  /**
   * Analyzes the current queue and returns an analysis object with wait times
   * keyed by entry._id for safe lookups even if the queue is reordered.
   *
   * @param {Array} queue - Array of queue entries, each with _id, joinedAt, and priority
   * @param {Date} [currentTime=new Date()] - The current time for wait calculations
   * @returns {Object} analysis - Queue analysis with waitingTimes, averageWait, maxWait, and totalEntries
   */
  analyzeQueue(queue, currentTime = new Date()) {
    const analysis = {
      waitingTimes: {},     // Keyed by entry._id for safe lookups
      averageWait: 0,
      maxWait: 0,
      totalEntries: queue.length
    };

    let totalWaitTime = 0;

    queue.forEach(entry => {
      const waitTime = (currentTime - new Date(entry.joinedAt)) / (1000 * 60);
      analysis.waitingTimes[entry._id] = waitTime; // Store by ID for safe lookups
      totalWaitTime += waitTime;

      if (waitTime > analysis.maxWait) {
        analysis.maxWait = waitTime;
      }
    });

    analysis.averageWait = queue.length > 0 ? totalWaitTime / queue.length : 0;

    return analysis;
  }

  /**
   * Applies fairness boosts to queue entries based on their wait times.
   * Entries that have waited longer receive a proportionally higher priority boost.
   *
   * @param {Array} queue - Array of queue entries
   * @param {Object} analysis - The analysis object returned by analyzeQueue
   * @returns {Array} queue - The queue with updated priority values
   */
  applyFairnessBoosts(queue, analysis) {
    queue.forEach(entry => {
      const waitTime = analysis.waitingTimes[entry._id];
      if (waitTime !== undefined) {
        const boost = waitTime * this.fairnessBoostPerMinute;
        entry.priority = (entry.priority || 0) + boost;
      }
    });

    return queue;
  }

  /**
   * Prevents starvation by giving a large priority boost to entries
   * that have exceeded the maximum allowed wait time.
   *
   * @param {Array} queue - Array of queue entries
   * @param {Object} analysis - The analysis object returned by analyzeQueue
   * @returns {Array} queue - The queue with starvation-prevention boosts applied
   */
  preventStarvation(queue, analysis) {
    queue.forEach(entry => {
      const waitTime = analysis.waitingTimes[entry._id]; // Safely get the exact wait time

      if (waitTime !== undefined && waitTime > this.maxAllowedWait) {
        entry.priority = (entry.priority || 0) + this.starvationBoost;
        entry.starvationPrevented = true;
      }
    });

    return queue;
  }

  /**
   * Runs the full fairness pipeline: analyze, boost, and prevent starvation.
   *
   * @param {Array} queue - Array of queue entries
   * @param {Date} [currentTime=new Date()] - The current time for wait calculations
   * @returns {{ queue: Array, analysis: Object }} The processed queue and analysis
   */
  processQueue(queue, currentTime = new Date()) {
    const analysis = this.analyzeQueue(queue, currentTime);
    this.applyFairnessBoosts(queue, analysis);
    this.preventStarvation(queue, analysis);

    // Sort by priority descending (highest priority first)
    queue.sort((a, b) => (b.priority || 0) - (a.priority || 0));

    return { queue, analysis };
  }
}

// Export for both Node.js and browser environments
if (typeof module !== 'undefined' && module.exports) {
  module.exports = FairnessHandler;
}
