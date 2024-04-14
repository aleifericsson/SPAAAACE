function Name() {
  return (
    <div>
      <div className="name">
        <input type="submit" placeholder="Name..." onSubmit={handleName} />
        <button type="submit"></button>
      </div>
    </div>
  );
}

export default Name;
