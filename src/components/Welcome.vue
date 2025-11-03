<template>
    <h1 class="display-6 fw-bold text-dark-custom">{{ message }}</h1>
    <router-link class="btn btn-custom" to="/registrar">Registrar</router-link>
</template>

<script>
    export default{
        name: 'welcomeApp',
        description: "Main page for app",
        props: {
            message: {
                type: String, 
                default: "Bienvenido",
            },
        }
    }
</script>

<style>
.ultimos-registros {
  background-color: #f8f6f7;
  min-height: 100vh;
}

.text-dark-custom {
  color: #211119;
}

.text-primary-custom {
  color: #f7bad9;
}

/* Card Styling */
.patient-card {
  border: none;
  border-radius: 12px;
  background: white;
  box-shadow: 0 2px 8px rgba(33, 17, 25, 0.08);
  transition: all 0.3s ease;
}

.patient-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 24px rgba(247, 186, 217, 0.3);
  border: 2px solid #f7bad9;
}

/* Info Rows */
.patient-info {
  font-size: 0.9rem;
}

.info-row {
  display: flex;
  justify-content: space-between;
  padding: 0.4rem 0;
  border-bottom: 1px solid #f8f6f7;
}

.info-row:last-child {
  border-bottom: none;
}

.info-label {
  font-weight: 600;
  color: #211119;
}

.info-value {
  color: #666;
  text-align: right;
  max-width: 60%;
}

/* ASA Badges */
.badge {
  font-size: 0.75rem;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-weight: 600;
}

.badge-asa-1 {
  background-color: #d4edda;
  color: #155724;
}

.badge-asa-2 {
  background-color: #d1ecf1;
  color: #0c5460;
}

.badge-asa-3 {
  background-color: #fff3cd;
  color: #856404;
}

.badge-asa-4 {
  background-color: #f8d7da;
  color: #721c24;
}

.badge-asa-5 {
  background-color: #721c24;
  color: white;
}

.badge-asa-default {
  background-color: #e2e3e5;
  color: #383d41;
}

/* Buttons */
.btn-custom {
  background-color: #f7bad9;
  color: #211119;
  border: none;
  font-weight: 600;
  padding: 0.6rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.btn-custom:hover {
  background-color: #211119;
  color: #f7bad9;
  transform: scale(1.02);
}

.btn-outline-custom {
  background-color: transparent;
  color: #211119;
  border: 2px solid #f7bad9;
  font-weight: 600;
  padding: 0.6rem 2rem;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.btn-outline-custom:hover {
  background-color: #f7bad9;
  color: #211119;
  border-color: #f7bad9;
}

/* Responsive */
@media (max-width: 768px) {
  .patient-card {
    margin-bottom: 1rem;
  }
}
</style>