<?php

if(isset($_POST['nome']) && isset($_POST['cpf']) && isset($_POST['tel']) && isset($_POST['lance'])){

    $validate = [
        'success' => true,
        'message' => 'Lance concluído com sucesso'
    ];

    echo json_encode($validate);

}else{

    $validate = [
        'success' => false,
        'message' => 'Nem todos os dados foram preenchidos'
    ];

    echo json_encode($validate);
}
