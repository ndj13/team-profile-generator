const Engineer = require('../lib/Engineer.js');


//Name
test('creates random new engineer name', () => {
    const engineer = new Engineer('Adele');

    expect(engineer.name).toBe('Adele');

  });

  test('creates random new engineer name', () => {
    const engineer = new Engineer();
    
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.name.length).toBeGreaterThan(0);

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
    const engineer = new Engineer('Adele', '100', 'adele@trilogy.com', '111-222-3344');
    expect(engineer.email).toEqual(expect.any('adele@trilogy.com'));
  });


  //Number
  test('creates number', () => {
    const engineer = new Engineer('Adele', '100', 'adele@trilogy.com', '111-222-3344');
    expect(engineer.phone).toEqual(expect.any('111-222-3344'));
  });

