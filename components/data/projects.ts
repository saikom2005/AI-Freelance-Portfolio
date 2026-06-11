import { Project } from "./types";

export const projects: Project[] = [
  {
    id: "kom",
    title: "Kom — Skip Tracing Web App",
    badge: "Full-Stack App",
    description:
      "Built a high-impact, full-stack platform that lets realtors skip trace bulk leads by uploading a CSV — finding contact info for property owners in bulk instead of one at a time. Designed a PostgreSQL/SQL backend to handle complex real estate data with speed, accuracy, and scale, with a Streamlit and JavaScript frontend for real-time parsing and an intuitive client-facing UI.",
    pills: ["Python", "PostgreSQL", "SQL", "JavaScript", "Streamlit"],
  },
  {
    id: "churn",
    title: "Customer Churn Prediction Model",
    badge: "ML Model",
    description:
      "Trained a machine learning model to predict which customers are likely to cancel their subscription, giving businesses a head start to intervene before they lose revenue. Using XGBoost and scikit-learn, the model reached 91% accuracy and a 94% ROC-AUC score on held-out data.",
    pills: ["XGBoost", "scikit-learn", "Python", "pandas", "91% accuracy"],
  },
];
