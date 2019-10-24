const scrollIntoView = (e, ref) => {
    e.preventDefault();
  
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

export default scrollIntoView;
