<?php

if (isset($_POST['nome']) && isset($_POST['cpf']) && isset($_POST['tel']) && isset($_POST['lance'])) {

    try {

        extract($_POST);
        $conn = new PDO("mysql:host=localhost; dbname=auctioncar", "root", "");
        $stmt = $conn->prepare("INSERT INTO lance(nome,cpf,email,tel,valor) VALUES('$nome','$cpf','$email','$tel',$lance)");
        $results = $stmt->execute();

        $validate = [
            'success' => true,
            'message' => 'Lance concluído com sucesso'
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
} else {

    $validate = [
        'success' => false,
        'message' => 'Nem todos os dados foram preenchidos'
    ];

    echo json_encode($validate);
}
