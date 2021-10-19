const Employee = require('../lib/Employee.js');


//Name
test('creates random new employee name', () => {
    const employee = new Employee('Adele');

    expect(employee.name).toBe('Adele');

  });

  test('creates random new employee name', () => {
    const employee = new Employee();
    
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.name.length).toBeGreaterThan(0);

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
    const employee = new Employee('Adele', '100', 'adele@trilogy.com', '111-222-3344');
    expect(employee.email).toEqual(expect.any('adele@trilogy.com'));
  });


  //Number
  test('creates number', () => {
    const employee = new Employee('Adele', '100', 'adele@trilogy.com', '111-222-3344');
    expect(employee.phone).toEqual(expect.any('111-222-3344'));
  });

