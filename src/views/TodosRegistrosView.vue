<template>
    <todos-registros></todos-registros>
</template>

<script>

import TodosRegistros from '@/components/TodosRegistros.vue';
export default{
    name: "TodosRegistrosView",
    components: {
        TodosRegistros
    }
}
</script>
<style>
.todos-registros {
  background-color: #f8f6f7;
  min-height: 100vh;
}

.text-dark-custom {
  color: #211119;
}

.text-primary-custom {
  color: #f7bad9;
}

/* Tabla */
.table-header {
  background-color: #211119;
  color: white;
}

.table-header th {
  border: none;
  font-weight: 600;
  padding: 1rem;
  white-space: nowrap;
}

.sortable {
  cursor: pointer;
  user-select: none;
}

.sortable:hover {
  background-color: rgba(247, 186, 217, 0.2);
}

.table-hover tbody tr:hover {
  background-color: rgba(247, 186, 217, 0.1);
  cursor: pointer;
}

/* Badges */
.badge {
  font-size: 0.75rem;
  padding: 0.4rem 0.6rem;
  border-radius: 12px;
  font-weight: 600;
}

.badge-genero-m {
  background-color: #d1ecf1;
  color: #0c5460;
}

.badge-genero-f {
  background-color: #f8d7da;
  color: #721c24;
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

/* Botones */
.btn-custom {
  background-color: #f7bad9;
  color: #211119;
  border: none;
  font-weight: 600;
  padding: 0.6rem 1.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.btn-custom:hover {
  background-color: #211119;
  color: #f7bad9;
  transform: scale(1.02);
}

.btn-outline-primary:hover {
  background-color: #f7bad9;
  border-color: #f7bad9;
  color: #211119;
}

/* Paginación */
.pagination .page-link {
  color: #211119;
  border-color: #f7bad9;
}

.pagination .page-item.active .page-link {
  background-color: #f7bad9;
  border-color: #f7bad9;
  color: #211119;
}

.pagination .page-link:hover {
  background-color: rgba(247, 186, 217, 0.2);
  border-color: #f7bad9;
}

/* Spinner */
.spinner-border.text-primary-custom {
  color: #f7bad9 !important;
}

/* Responsive */
@media (max-width: 768px) {
  .table {
    font-size: 0.85rem;
  }
  
  .btn-group-sm .btn {
    padding: 0.2rem 0.4rem;
  }
}
</style>