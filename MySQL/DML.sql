-- DML.sql

-- Insert data into the factories table
INSERT INTO
    factories (id, name, location)
VALUES (1, 'Factory A', 'Location A'),
    (2, 'Factory B', 'Location B'),
    (3, 'Factory C', 'Location C');

-- Insert data into the sprockets table
INSERT INTO
    sprockets (
        id,
        teeth,
        pitch_diameter,
        outside_diameter,
        pitch
    )
VALUES (1, 5, 5, 6, 1),
    (2, 5, 5, 6, 1),
    (3, 5, 5, 6, 1);

-- Insert data into the sprocket_production table for Factory 1
INSERT INTO
    sprocket_production (
        factory_id,
        actual_production,
        goal_production,
        timestamp
    )
VALUES (1, 32, 32, 1611194818),
    (1, 29, 30, 1611194878),
    (1, 31, 31, 1611194938),
    (1, 30, 29, 1611194998),
    (1, 32, 32, 1611195058),
    (1, 32, 32, 1611195118),
    (1, 29, 30, 1611195178),
    (1, 31, 31, 1611195238),
    (1, 30, 29, 1611195298),
    (1, 32, 32, 1611195358),
    (1, 32, 32, 1611195418),
    (1, 29, 30, 1611195478),
    (1, 31, 31, 1611195538),
    (1, 30, 29, 1611195598),
    (1, 32, 32, 1611195658),
    (1, 32, 32, 1611195718),
    (1, 29, 30, 1611195778),
    (1, 31, 31, 1611195838),
    (1, 30, 29, 1611195898),
    (1, 32, 32, 1611195958);

-- Insert data into the sprocket_production table for Factory 2
INSERT INTO
    sprocket_production (
        factory_id,
        actual_production,
        goal_production,
        timestamp
    )
VALUES (2, 32, 31, 1611204818),
    (2, 28, 33, 1611204878),
    (2, 31, 29, 1611204938),
    (2, 30, 29, 1611204998),
    (2, 30, 32, 1611205058),
    (2, 32, 30, 1611205118),
    (2, 29, 30, 1611205178),
    (2, 28, 31, 1611205238),
    (2, 30, 29, 1611205298),
    (2, 32, 31, 1611205358),
    (2, 32, 31, 1611205418),
    (2, 29, 30, 1611205478),
    (2, 31, 28, 1611205538),
    (2, 30, 29, 1611205598),
    (2, 31, 32, 1611205658),
    (2, 32, 29, 1611205718),
    (2, 29, 30, 1611205778),
    (2, 29, 31, 1611205838),
    (2, 33, 28, 1611205898),
    (2, 30, 32, 1611205958);

-- Insert data into the sprocket_production table for Factory 3
INSERT INTO
    sprocket_production (
        factory_id,
        actual_production,
        goal_production,
        timestamp
    )
VALUES (3, 32, 31, 1611304818),
    (3, 29, 31, 1611304878),
    (3, 31, 29, 1611304938),
    (3, 30, 30, 1611304998),
    (3, 30, 32, 1611305058),
    (3, 32, 30, 1611305118),
    (3, 29, 30, 1611305178),
    (3, 29, 31, 1611305238),
    (3, 30, 29, 1611305298),
    (3, 32, 31, 1611305358),
    (3, 32, 30, 1611305418),
    (3, 29, 30, 1611305478),
    (3, 31, 28, 1611305538),
    (3, 30, 29, 1611305598),
    (3, 30, 32, 1611305658),
    (3, 32, 29, 1611305718),
    (3, 29, 31, 1611305778),
    (3, 29, 31, 1611305838),
    (3, 33, 28, 1611305898),
    (3, 31, 32, 1611305958);