<?php

    try {


        $conn = new PDO("mysql:host=localhost; dbname=auctioncar", "root", "");
        $stmt = $conn->prepare("SELECT nome,valor FROM lance ORDER BY valor DESC LIMIT 5");
        $results = $stmt->execute();
        $data = $stmt->fetchAll(PDO::FETCH_ASSOC);

        $validate = [
            'success' => true,
            'data' => $data
        ];

        echo json_encode($validate);

    } catch (Exception $e) {

        $validate = [
            'success' => false,
            'message' => 'Desculpe o erro foi da nossa parte mas já estamos trabalhando nisso',
            'error' => $e->getMessage()
        ];

        echo json_encode($validate);

    }

