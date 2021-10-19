const Manager = require('../lib/Manager.js');


//Name
test('creates random new manager name', () => {
    const manager = new Manager('Adele');

    expect(manager.name).toBe('Adele');

  });

  test('creates random new manager name', () => {
    const manager = new Manager();
    
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.name.length).toBeGreaterThan(0);

  });



//ID
test('creates id', () => {
    const id = new Id(10);

    expect(id).toBe(10);

  });

  test('creates random id', () => {
    const id = new Id();
    
    expect(id).toEqual(expect.any(Number));
    expect(id).toBeGreaterThan(0);

  });


  //Email
  test('creates email', () => {
    const manager = new Manager('Adele', '100', 'adele@trilogy.com', '111-222-3344');
    expect(manager.email).toEqual(expect.any('adele@trilogy.com'));
  });


  //Number
  test('creates number', () => {
    const manager = new Manager('Adele', '100', 'adele@trilogy.com', '111-222-3344');
    expect(manager.phone).toEqual(expect.any('111-222-3344'));
  });

