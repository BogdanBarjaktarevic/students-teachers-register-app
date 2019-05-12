export const sort = (persons, sortType) => {
    let personList = persons;
    if (sortType === "Корисничко име") {
      personList = persons.sort((a, b) =>
        a.username > b.username ? 1 : -1
      );
    }

    if (sortType === "Разред") {
      personList = persons.sort((a, b) =>
        a.class > b.class ? 1 : -1
      );
    }

    if (sortType === "Одељење") {
      personList = persons.sort((a, b) =>
        a.department > b.department ? 1 : -1
      );
    }

    if (sortType === "Датум") {
      personList = persons
        .reverse()
        .sort((a, b) => (a.date > b.date ? 1 : -1));
    }

    return personList;
}