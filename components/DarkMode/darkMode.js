const DarkModeToggle = ({ isDarkMode, onToggle }) => {
    return (
        <button
            onClick={onToggle}
            className={`absolute bottom-4 right-4 bg-primary text-light px-4 py-2 rounded-full shadow-light hover:bg-secondary transition-all`}
        >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
    );
};

export default DarkModeToggle;
