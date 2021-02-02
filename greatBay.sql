create database bidItems;

use bidItems;

create table items (
	id integer(100) auto_increment not null primary key,
    category varchar(30),
    item_name varchar(30),
    starting_price integer(20),
    current_bid integer(20)
);
