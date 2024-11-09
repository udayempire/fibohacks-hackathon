export const Button = ({ text, type = 'button', variant = 'default', onClick, className = '' }) => {
  // Define button styles based on the variant
  const baseStyles = 'font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none focus:ring-4';
  const variantStyles = {
    default: 'text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-gray-100',
    google: 'text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-gray-100',
    dark: 'text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300',
    darkHover: 'dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700',
  };

  // Combine base styles with selected variant styles
  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  return (
    <button type={type} className={buttonStyles} onClick={onClick}>
      {text}
    </button>
  );
};
