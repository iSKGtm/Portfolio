<?php
echo "<h1>Lendo XML com PHP</h1>";

$xml = simplexml_load_file('listaSignos.xml');

echo 'dataInicio' . $xml->dataInicio . '<br>';
echo 'dataFim' . $xml->dataFim . '<br>';
echo 'signoNome' . $xml->signoNome . '<br>';
echo 'descricao' . $xml->descricao . '<br>';
?>