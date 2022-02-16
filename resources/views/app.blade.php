<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Manpower Dev-Pappu</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">

      <!-- Custom fonts for this template-->
      <link href="{{ asset('backend/vendor/fontawesome-free/css/all.min.css') }}" rel="stylesheet" type="text/css">
    <link
        href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
        rel="stylesheet">

    <!-- Custom styles for this template-->
    <link rel="stylesheet" href="{{ asset('backend/css/sb-admin-2.min.css') }}">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet">
    
    <!-- Sweetalert2 -->
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</head>

<style>
.body{
    background: #FEFEFE;
}

.card-header {
    background: #4E73DF !important;
}

.cursor{
    cursor: pointer;
}

button {
    background: none;
    border: 0px;
}

</style>

<body id="page-top" class="body">


            <div id="app">
                <main-component></main-component>
            </div>

    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
    </a>

<script>
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
</script>

<script src="{{ asset('js/app.js') }}"></script>

   <!-- Bootstrap core JavaScript-->
    <script src="{{ asset('backend/vendor/jquery/jquery.min.js') }}"></script>
    <script src="{{ asset('backend/vendor/bootstrap/js/bootstrap.bundle.min.js') }}"></script>

    <!-- Core plugin JavaScript-->
    <script src="{{ asset('backend/vendor/jquery-easing/jquery.easing.min.js') }}"></script>

    <!-- Custom scripts for all pages-->
    <script src="{{ asset('backend/js/sb-admin-2.min.js') }}"></script>

</body>

</html>
