export function getCategoryColor(category: string) {
    switch (category) {
      case "Inteligencia-artificial":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
  
      case "Analisis-de-datos":
        return "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200";
  
      case "Ciencia-de-datos":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
  
      case "Machine-learning":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
  
      case "Estadistica":
        return "bg-green-100 text-pink-800 dark:bg-green-900 dark:text-green-200";
  
      case "Matematicas":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
  
      case "Programacion":
        return "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200";
  
      case "About-me":
        return "bg-orange-100 text-orange-800 dark:bg-orange-700 dark:text-orange-200";
  
      case "Mision":
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200";
  
      case "Futuro":
        return "bg-pink-100 text-pink-800 dark:bg-pink-700 dark:text-pink-200";
  
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200";
    }
  }
  