const Intern = require('../lib/Intern.js');


//Name
test('creates random new intern name', () => {
    const intern = new intern('Adele');

    expect(intern.name).toBe('Adele');

  });

  test('creates random new intern name', () => {
    const intern = new Intern();
    
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.name.length).toBeGreaterThan(0);

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
    const intern = new Employee('Adele', '100', 'adele@trilogy.com', '111-222-3344');
    expect(intern.email).toEqual(expect.any('adele@trilogy.com'));
  });


  //Number
  test('creates number', () => {
    const intern = new Intern('Adele', '100', 'adele@trilogy.com', '111-222-3344');
    expect(intern.phone).toEqual(expect.any('111-222-3344'));
  });

