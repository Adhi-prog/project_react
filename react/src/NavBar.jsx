const Navbar = ({ data }) => {
    return (
      <div className="w-full h-[3vh] bg-blue-500 text-white flex justify-center">
        {/* Map over the data to display each item */}
        {data.map(item => (
          <span key={item.id}>{item.name} </span>
        ))}
      </div>
    );
  }
  
  export default Navbar;
  