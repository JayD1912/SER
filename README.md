# Khaki Mitra: Smart India Hackathon Project

Khaki Mitra is an innovative solution aimed at enhancing the efficiency and effectiveness of police emergency response systems. Developed as part of the **Smart India Hackathon**, this project introduces advanced technologies to analyze emergency calls, predict the emotional state of callers, and provide actionable insights for responders.

---

## 🚔 **Project Overview**

Indian police forces handle 2200-3000 calls daily, with an average response time of over 32 minutes. This project addresses the critical need for faster and more accurate responses by leveraging real-time voice analysis and emotional prediction.

### **Key Objectives**
1. **Emotion Detection:** Analyze live call audio to determine:
   - Stressful Voice
   - Drunk Voice
   - Prank Voice
   - Abusive Voice
   - Painful Voice
   - Other mental states
2. **Dashboard Integration:** Provide responders with a user-friendly interface for accessing call analytics and caller details.

---

## 🔧 **Proposed Solution**

### **Features**
- **Dual Prognosis Model:** Employs two machine learning models to improve emotion detection accuracy.
- **Interactive Dashboard:** Displays caller emotions, call types, and analytics with real-time updates.
- **Live Call Integration:** Ensures seamless handling of live emergency calls.

### **Technologies Used**
- **Audio Processing:** Mel spectrograms for feature extraction.
- **Machine Learning Algorithms:**
  - Bi-LSTM (Hindi + English)
  - Transformer Encoder
  - KNN Classifier
  - Logistic Regression
- **Tech Stack:**
  - React.js, Chart.js, Highcharts (Frontend)
  - Flask (Backend)
  - Twilio (Call Integration via REST APIs)
  - Stanza (NLP for regional dialects)

---

## 🛠️ **Architecture and Methodology**

### **Stages of Development**
1. Build an **audio dataset** using recordings from diverse speakers.
2. Develop the **dual prognosis model** for emotion prediction.
3. Create an **interactive dashboard** for real-time analytics.
4. Integrate the solution with **live calls** via Twilio APIs.
5. Ensure seamless **module integration** for production readiness.

### **Critical Components**
- **Feature Engineering:** Statistical feature extraction from audio data.
- **Noise Detection:** Identify and classify audio noise types using CNN models.
- **Cloud Deployment:** Plan for scalable deployment and future enhancements.

---

## 🌟 **Key Features**

1. **Real-time Call Analysis:**
   - Emotion recognition
   - Call type identification
2. **Location Tracking:**
   - Notify nearest police stations about the caller’s location.
3. **Analytical Insights:**
   - Heat maps for call types
   - Day-wise analytical reports
4. **Emergency Dispatch:**
   - SMS notifications post-dispatch
   - Feedback forms for callers

---

## 📈 **Future Scope**

1. Expand to detect additional emotions and conditions.
2. Deploy the solution on cloud platforms for scalability.
3. Enhance the accuracy of predictive models.

---

## 🧪 **Results**

- **SER Accuracy:**
  - Bi-LSTM: High accuracy for Hindi and English calls.
  - KNN Classifier: Achieved 65% accuracy with hyperparameter tuning.
- **Noise Classification:** Successfully classified noise types using UrbanSound8K dataset.

---

## 🎨 **Dashboard Features**
- Call type and emotion identification
- Heat maps for analytical visualization
- Location tracking for dispatch planning
- SMS updates and feedback collection

---

### **Contributors**
**Team ByteCoders!**  
Developed as part of the **Smart India Hackathon** initiative.
