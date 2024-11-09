export const Input = ({ label, type = 'text', placeholder, id, value, onChange, className = '' }) => {
    return (
      <div className="grid w-full max-w-xs md:max-w-sm items-center gap-1.5">
        <label htmlFor={id} className="block text-sm font-medium text-gray-900">{label}</label>
        <input
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 ${className}`}
          placeholder={placeholder}
          aria-describedby={`${id}-explanation`}
        />
      </div>
    );
  };