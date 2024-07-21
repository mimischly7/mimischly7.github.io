```
2024-06-03 10:34:59            _                 _    
2024-06-03 10:34:59   __ _  __| |_ __ __ _ _ __ | |_  
2024-06-03 10:34:59  / _` |/ _` | '__/ _` | '_ \| __|
2024-06-03 10:34:59 | (_| | (_| | | | (_| | | | | |_  
2024-06-03 10:34:59  \__, |\__,_|_|  \__,_|_| |_|\__|
2024-06-03 10:34:59     |_|                           
2024-06-03 10:34:59
2024-06-03 10:34:59 Version: 1.9.4, build: 671cf97b
2024-06-03 10:34:59 Access web UI at http://localhost:6333/dashboard
2024-06-03 10:34:59
2024-06-03 10:34:59 2024-06-03T14:34:59.536597Z  INFO storage::content_manager::consensus::persistent: Loading raft state from ./storage/raft_state.json    
2024-06-03 10:34:59 2024-06-03T14:34:59.547840Z  INFO qdrant: Distributed mode disabled    
2024-06-03 10:34:59 2024-06-03T14:34:59.547945Z  INFO qdrant: Telemetry reporting enabled, id: 03277f13-ff98-4f32-a3c9-ea2fa49b529f    
2024-06-03 10:34:59 2024-06-03T14:34:59.550753Z  INFO qdrant::actix: TLS disabled for REST API    
2024-06-03 10:34:59 2024-06-03T14:34:59.550953Z  INFO qdrant::actix: Qdrant HTTP listening on 6333    
2024-06-03 10:34:59 2024-06-03T14:34:59.551008Z  INFO actix_server::builder: Starting 3 workers
2024-06-03 10:34:59 2024-06-03T14:34:59.551065Z  INFO actix_server::server: Actix runtime found; starting in Actix runtime
2024-06-03 10:34:59 2024-06-03T14:34:59.553254Z  INFO qdrant::tonic: Qdrant gRPC listening on 6334    
2024-06-03 10:34:59 2024-06-03T14:34:59.553271Z  INFO qdrant::tonic: TLS disabled for gRPC API    
2024-06-03 10:35:02 2024-06-03T14:35:02.379162Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /dashboard HTTP/1.1" 200 920 "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36" 0.032523    
2024-06-03 10:35:02 2024-06-03T14:35:02.553905Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /dashboard/assets/index-58efb4cc.css HTTP/1.1" 200 23946 "http://localhost:6333/dashboard" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36" 0.083918    
2024-06-03 10:35:02 2024-06-03T14:35:02.868733Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /dashboard/assets/index-8dfa2cda.js HTTP/1.1" 200 1380014 "http://localhost:6333/dashboard" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36" 0.403168    
2024-06-03 10:35:03 2024-06-03T14:35:03.034650Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections HTTP/1.1" 200 64 "http://localhost:6333/dashboard" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36" 0.004707    
2024-06-03 10:35:03 2024-06-03T14:35:03.034710Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /issues HTTP/1.1" 200 61 "http://localhost:6333/dashboard" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36" 0.004790    
2024-06-03 10:35:03 2024-06-03T14:35:03.043056Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /dashboard/logo.png HTTP/1.1" 200 9339 "http://localhost:6333/dashboard" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36" 0.001102    
2024-06-03 10:35:03 2024-06-03T14:35:03.232953Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /dashboard/favicon.ico HTTP/1.1" 200 15086 "http://localhost:6333/dashboard" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36" 0.002531    
2024-06-03 10:35:03 2024-06-03T14:35:03.236380Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /dashboard/manifest.json HTTP/1.1" 200 248 "http://localhost:6333/dashboard" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36" 0.003059    
2024-06-03 10:35:03 2024-06-03T14:35:03.249043Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /dashboard/logo192.png HTTP/1.1" 200 8870 "http://localhost:6333/dashboard" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36" 0.001294    
2024-06-03 10:35:06 2024-06-03T14:35:06.439125Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /dashboard/openapi.json HTTP/1.1" 200 30884 "http://localhost:6333/dashboard" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36" 0.013564    
2024-06-03 10:35:06 2024-06-03T14:35:06.464779Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /dashboard/assets/jsonMode-91fdc8c7.js HTTP/1.1" 200 11583 "http://localhost:6333/dashboard/assets/index-8dfa2cda.js" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36" 0.005025    
2024-06-03 10:35:06 2024-06-03T14:35:06.549966Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections HTTP/1.1" 200 64 "http://localhost:6333/dashboard" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36" 0.015706    
2024-06-03 10:35:06 2024-06-03T14:35:06.574314Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /dashboard/assets/editor.worker-94ffd778.js HTTP/1.1" 200 66217 "http://localhost:6333/dashboard" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36" 0.012669    
2024-06-03 10:35:06 2024-06-03T14:35:06.577524Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /dashboard/assets/json.worker-8dd963f3.js HTTP/1.1" 200 103217 "http://localhost:6333/dashboard" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36" 0.021466    
2024-06-03 10:35:06 2024-06-03T14:35:06.838745Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /dashboard/assets/codicon-8b349ebc.ttf HTTP/1.1" 200 42094 "http://localhost:6333/dashboard/assets/index-58efb4cc.css" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36" 0.005298    
2024-06-03 10:35:07 2024-06-03T14:35:07.354030Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections HTTP/1.1" 200 58 "http://localhost:6333/dashboard" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36" 0.000949    
2024-06-03 10:35:08 2024-06-03T14:35:08.225839Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections HTTP/1.1" 200 62 "http://localhost:6333/dashboard" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36" 0.002745    
2024-06-03 10:35:24 2024-06-03T14:35:24.502264Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections HTTP/1.1" 200 65 "http://localhost:6333/dashboard" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36" 0.001998    
2024-06-03 11:10:47 2024-06-03T15:10:47.272886Z  INFO storage::content_manager::toc::collection_meta_ops: Creating collection books    
2024-06-03 11:10:48 2024-06-03T15:10:48.162892Z  INFO actix_web::middleware::logger: 172.20.0.1 "PUT /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.972313    
2024-06-03 11:10:50 2024-06-03T15:10:50.840357Z  INFO actix_web::middleware::logger: 172.20.0.1 "PUT /collections/books/points?wait=false HTTP/1.1" 200 95 "-" "python-httpx/0.27.0" 0.058193    
2024-06-03 11:10:52 2024-06-03T15:10:52.376273Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /favicon.ico HTTP/1.1" 404 0 "http://localhost:6333/" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36" 0.004301    
2024-06-03 11:10:54 2024-06-03T15:10:54.313718Z  INFO actix_web::middleware::logger: 172.20.0.1 "POST /collections/books/points/search HTTP/1.1" 200 443 "-" "python-httpx/0.27.0" 0.033693    
2024-06-03 11:11:33 2024-06-03T15:11:33.512046Z  INFO storage::content_manager::toc::collection_meta_ops: Creating collection books    
2024-06-03 11:11:33 2024-06-03T15:11:33.517762Z  INFO actix_web::middleware::logger: 172.20.0.1 "PUT /collections/books HTTP/1.1" 409 100 "-" "python-httpx/0.27.0" 0.008674    
2024-06-03 11:11:52 2024-06-03T15:11:52.844123Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections HTTP/1.1" 200 73 "http://localhost:6333/dashboard" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36" 0.004059    
2024-06-03 11:11:54 2024-06-03T15:11:54.307199Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books HTTP/1.1" 200 394 "http://localhost:6333/dashboard" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36" 0.027254    
2024-06-03 11:11:54 2024-06-03T15:11:54.321010Z  INFO actix_web::middleware::logger: 172.20.0.1 "POST /collections/books/points/scroll HTTP/1.1" 200 19863 "http://localhost:6333/dashboard" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36" 0.016318    
2024-06-03 11:13:10 2024-06-03T15:13:10.079871Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.004051    
2024-06-03 11:13:10 2024-06-03T15:13:10.098466Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-03 11:13:10 2024-06-03T15:13:10.206971Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 68 "-" "python-httpx/0.27.0" 0.110417    
2024-06-03 11:13:10 2024-06-03T15:13:10.213270Z  INFO storage::content_manager::toc::collection_meta_ops: Creating collection books    
2024-06-03 11:13:10 2024-06-03T15:13:10.709071Z  INFO actix_web::middleware::logger: 172.20.0.1 "PUT /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.496212    
2024-06-03 11:13:12 2024-06-03T15:13:12.770740Z  INFO actix_web::middleware::logger: 172.20.0.1 "PUT /collections/books/points?wait=false HTTP/1.1" 200 95 "-" "python-httpx/0.27.0" 0.035785    
2024-06-03 11:13:13 2024-06-03T15:13:13.039195Z  INFO actix_web::middleware::logger: 172.20.0.1 "POST /collections/books/points/search HTTP/1.1" 200 444 "-" "python-httpx/0.27.0" 0.027515    
2024-06-03 13:01:30 2024-06-03T17:01:30.802901Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.114822    
2024-06-03 13:01:32 2024-06-03T17:01:32.367518Z  INFO actix_web::middleware::logger: 172.20.0.1 "POST /collections/books/points/search HTTP/1.1" 200 442 "-" "python-httpx/0.27.0" 0.059758    
2024-06-03 13:02:25 2024-06-03T17:02:25.398423Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.066803    
2024-06-03 13:02:27 2024-06-03T17:02:27.475978Z  INFO actix_web::middleware::logger: 172.20.0.1 "POST /collections/books/points/search HTTP/1.1" 200 443 "-" "python-httpx/0.27.0" 0.100459    
2024-06-03 13:02:27 2024-06-03T17:02:27.733275Z  INFO actix_web::middleware::logger: 172.20.0.1 "POST /collections/books/points/search HTTP/1.1" 200 444 "-" "python-httpx/0.27.0" 0.042350    
2024-06-03 13:02:27 2024-06-03T17:02:27.899455Z  INFO actix_web::middleware::logger: 172.20.0.1 "POST /collections/books/points/search HTTP/1.1" 200 421 "-" "python-httpx/0.27.0" 0.057726    
2024-06-03 13:03:28 2024-06-03T17:03:28.956485Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.003045    
2024-06-03 13:03:30 2024-06-03T17:03:30.220034Z  INFO actix_web::middleware::logger: 172.20.0.1 "POST /collections/books/points/search HTTP/1.1" 200 444 "-" "python-httpx/0.27.0" 0.005388    
2024-06-03 13:03:30 2024-06-03T17:03:30.345829Z  INFO actix_web::middleware::logger: 172.20.0.1 "POST /collections/books/points/search HTTP/1.1" 200 444 "-" "python-httpx/0.27.0" 0.007055    
2024-06-03 13:03:31 2024-06-03T17:03:31.773635Z  INFO actix_web::middleware::logger: 172.20.0.1 "POST /collections/books/points/search HTTP/1.1" 200 426 "-" "python-httpx/0.27.0" 0.003740    
2024-06-03 13:05:31 2024-06-03T17:05:31.911486Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.004373    
2024-06-03 13:05:33 2024-06-03T17:05:33.059584Z  INFO actix_web::middleware::logger: 172.20.0.1 "POST /collections/books/points/search HTTP/1.1" 200 445 "-" "python-httpx/0.27.0" 0.009087    
2024-06-03 13:05:33 2024-06-03T17:05:33.183777Z  INFO actix_web::middleware::logger: 172.20.0.1 "POST /collections/books/points/search HTTP/1.1" 200 444 "-" "python-httpx/0.27.0" 0.003236    
2024-06-03 13:05:33 2024-06-03T17:05:33.341574Z  INFO actix_web::middleware::logger: 172.20.0.1 "POST /collections/books/points/search HTTP/1.1" 200 448 "-" "python-httpx/0.27.0" 0.024131    
2024-06-03 13:06:51 2024-06-03T17:06:51.602187Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.004543    
2024-06-03 13:06:55 2024-06-03T17:06:55.498574Z  INFO actix_web::middleware::logger: 172.20.0.1 "POST /collections/books/points/search HTTP/1.1" 200 437 "-" "python-httpx/0.27.0" 0.012471    
2024-06-03 15:45:11 2024-06-03T19:45:11.724681Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.042887    
2024-06-03 15:45:14 2024-06-03T19:45:14.306305Z  INFO actix_web::middleware::logger: 172.20.0.1 "POST /collections/books/points/search HTTP/1.1" 200 438 "-" "python-httpx/0.27.0" 0.176224    
2024-06-06 15:27:55            _                 _    
2024-06-06 15:27:55   __ _  __| |_ __ __ _ _ __ | |_  
2024-06-06 15:27:55  / _` |/ _` | '__/ _` | '_ \| __|
2024-06-06 15:27:55 | (_| | (_| | | | (_| | | | | |_  
2024-06-06 15:27:55  \__, |\__,_|_|  \__,_|_| |_|\__|
2024-06-06 15:27:55     |_|                           
2024-06-06 15:27:55
2024-06-06 15:27:55 Version: 1.9.4, build: 671cf97b
2024-06-06 15:27:55 Access web UI at http://localhost:6333/dashboard
2024-06-06 15:27:55
2024-06-06 15:27:55 2024-06-06T19:27:55.333677Z  INFO storage::content_manager::consensus::persistent: Loading raft state from ./storage/raft_state.json    
2024-06-06 15:27:55 2024-06-06T19:27:55.362089Z  INFO storage::content_manager::toc: Loading collection: books    
2024-06-06 15:27:57 2024-06-06T19:27:57.025215Z  INFO collection::shards::local_shard: Recovering collection books: 0/1 (0%)    
2024-06-06 15:27:57 2024-06-06T19:27:57.118288Z  INFO collection::shards::local_shard: Recovered collection books: 1/1 (100%)    
2024-06-06 15:27:57 2024-06-06T19:27:57.134834Z  INFO qdrant: Distributed mode disabled    
2024-06-06 15:27:57 2024-06-06T19:27:57.136092Z  INFO qdrant: Telemetry reporting enabled, id: cccc7de4-d348-4e1c-ace4-1a036dba4049    
2024-06-06 15:27:57 2024-06-06T19:27:57.141852Z  INFO qdrant::actix: TLS disabled for REST API    
2024-06-06 15:27:57 2024-06-06T19:27:57.145009Z  INFO qdrant::actix: Qdrant HTTP listening on 6333    
2024-06-06 15:27:57 2024-06-06T19:27:57.145080Z  INFO qdrant::tonic: Qdrant gRPC listening on 6334    
2024-06-06 15:27:57 2024-06-06T19:27:57.145087Z  INFO qdrant::tonic: TLS disabled for gRPC API    
2024-06-06 15:27:57 2024-06-06T19:27:57.147940Z  INFO actix_server::builder: Starting 3 workers
2024-06-06 15:27:57 2024-06-06T19:27:57.147972Z  INFO actix_server::server: Actix runtime found; starting in Actix runtime
2024-06-06 15:30:23 2024-06-06T19:30:23.316783Z  INFO actix_server::server: SIGTERM received; starting graceful shutdown
2024-06-06 15:30:48            _                 _    
2024-06-06 15:30:48   __ _  __| |_ __ __ _ _ __ | |_  
2024-06-06 15:30:48  / _` |/ _` | '__/ _` | '_ \| __|
2024-06-06 15:30:48 | (_| | (_| | | | (_| | | | | |_  
2024-06-06 15:30:48  \__, |\__,_|_|  \__,_|_| |_|\__|
2024-06-06 15:30:48     |_|                           
2024-06-06 15:30:48
2024-06-06 15:30:48 Version: 1.9.4, build: 671cf97b
2024-06-06 15:30:48 Access web UI at http://localhost:6333/dashboard
2024-06-06 15:30:48
2024-06-06 15:30:48 2024-06-06T19:30:48.322865Z  INFO storage::content_manager::consensus::persistent: Loading raft state from ./storage/raft_state.json    
2024-06-06 15:30:48 2024-06-06T19:30:48.333923Z  INFO storage::content_manager::toc: Loading collection: books    
2024-06-06 15:30:48 2024-06-06T19:30:48.755184Z  INFO collection::shards::local_shard: Recovering collection books: 0/1 (0%)    
2024-06-06 15:30:48 2024-06-06T19:30:48.797348Z  INFO collection::shards::local_shard: Recovered collection books: 1/1 (100%)    
2024-06-06 15:30:48 2024-06-06T19:30:48.808675Z  INFO qdrant: Distributed mode disabled    
2024-06-06 15:30:48 2024-06-06T19:30:48.809023Z  INFO qdrant: Telemetry reporting enabled, id: aab4be85-9828-4423-9980-b199732c2b62    
2024-06-06 15:30:48 2024-06-06T19:30:48.812991Z  INFO qdrant::actix: TLS disabled for REST API    
2024-06-06 15:30:48 2024-06-06T19:30:48.813679Z  INFO qdrant::actix: Qdrant HTTP listening on 6333    
2024-06-06 15:30:48 2024-06-06T19:30:48.813755Z  INFO actix_server::builder: Starting 3 workers
2024-06-06 15:30:48 2024-06-06T19:30:48.813771Z  INFO actix_server::server: Actix runtime found; starting in Actix runtime
2024-06-06 15:30:48 2024-06-06T19:30:48.818842Z  INFO qdrant::tonic: Qdrant gRPC listening on 6334    
2024-06-06 15:30:48 2024-06-06T19:30:48.818858Z  INFO qdrant::tonic: TLS disabled for gRPC API    
2024-06-06 15:31:24 2024-06-06T19:31:24.294416Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.016885    
2024-06-06 15:32:39 2024-06-06T19:32:39.343175Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.004322    
2024-06-06 15:36:24 2024-06-06T19:36:24.794597Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 81 "-" "python-httpx/0.27.0" 0.003327    
2024-06-06 15:41:13 2024-06-06T19:41:13.993342Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.026935    
2024-06-06 15:41:22 2024-06-06T19:41:22.743794Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-06 15:41:22 2024-06-06T19:41:22.743872Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-06 15:41:22 2024-06-06T19:41:22.753549Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-06 15:41:22 2024-06-06T19:41:22.753787Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-06 15:41:22 2024-06-06T19:41:22.762270Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-06 15:41:22 2024-06-06T19:41:22.762760Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-06 15:41:22 2024-06-06T19:41:22.765255Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-06 15:41:22 2024-06-06T19:41:22.765388Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-06 15:41:22 2024-06-06T19:41:22.768745Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-06 15:41:22 2024-06-06T19:41:22.769463Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-06 15:41:22 2024-06-06T19:41:22.772092Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-06 15:41:22 2024-06-06T19:41:22.772859Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-06 15:41:22 2024-06-06T19:41:22.776585Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-06 15:41:22 2024-06-06T19:41:22.777613Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-06 15:41:22 2024-06-06T19:41:22.779743Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-06 15:41:22 2024-06-06T19:41:22.781043Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-06 15:41:23 2024-06-06T19:41:23.484985Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-06 15:41:23 2024-06-06T19:41:23.489149Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-06 15:41:23 2024-06-06T19:41:23.514382Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-06 15:41:23 2024-06-06T19:41:23.519392Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-06 15:41:23 2024-06-06T19:41:23.569775Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-06 15:41:23 2024-06-06T19:41:23.575139Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-06 15:41:23 2024-06-06T19:41:23.593465Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-06 15:41:23 2024-06-06T19:41:23.596327Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-06 15:41:23 2024-06-06T19:41:23.635999Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-06 15:41:23 2024-06-06T19:41:23.642888Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-06 15:52:09 2024-06-06T19:52:09.882693Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.027546    
2024-06-06 15:54:36 2024-06-06T19:54:36.607955Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.024220    
2024-06-06 15:55:14 2024-06-06T19:55:14.505816Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.010229    
2024-06-06 16:51:04 2024-06-06T20:51:04.360024Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.044593    
2024-06-06 16:52:34 2024-06-06T20:52:34.553492Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.019054    
2024-06-06 16:55:07 2024-06-06T20:55:07.486158Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.010449    
2024-06-06 16:56:44 2024-06-06T20:56:44.347045Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.002426    
2024-06-06 16:57:39 2024-06-06T20:57:39.038454Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.002055    
2024-06-06 16:58:16 2024-06-06T20:58:16.503083Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 81 "-" "python-httpx/0.27.0" 0.003910    
2024-06-06 16:58:53 2024-06-06T20:58:53.882017Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.004463    
2024-06-06 17:01:11 2024-06-06T21:01:11.067250Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.018773    
2024-06-06 17:01:47 2024-06-06T21:01:47.227642Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.003118    
2024-06-06 17:02:46 2024-06-06T21:02:46.023778Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.008620    
2024-06-06 17:05:45 2024-06-06T21:05:45.024383Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.029037    
2024-06-06 17:10:39 2024-06-06T21:10:39.137267Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.008677    
2024-06-06 17:11:52 2024-06-06T21:11:52.420289Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.008937    
2024-06-06 17:12:34 2024-06-06T21:12:34.790807Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.004681    
2024-06-06 17:13:50 2024-06-06T21:13:50.998397Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.003350    
2024-06-06 17:15:32 2024-06-06T21:15:32.416956Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.002326    
2024-06-06 17:16:35 2024-06-06T21:16:35.737705Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.002488    
2024-06-06 17:20:15 2024-06-06T21:20:15.931073Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.005668    
2024-06-06 17:23:43 2024-06-06T21:23:43.635382Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.011127    
2024-06-06 17:24:24 2024-06-06T21:24:24.118558Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.004740    
2024-06-06 17:28:29 2024-06-06T21:28:29.402783Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.007462    
2024-06-06 17:31:05 2024-06-06T21:31:05.644410Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 81 "-" "python-httpx/0.27.0" 0.007974    
2024-06-06 17:32:21 2024-06-06T21:32:21.332609Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.003361    
2024-06-06 17:32:48 2024-06-06T21:32:48.971423Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.011592    
2024-06-06 17:33:36 2024-06-06T21:33:36.603533Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.008120    
2024-06-06 17:38:58 2024-06-06T21:38:58.680538Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 81 "-" "python-httpx/0.27.0" 0.002643    
2024-06-06 17:39:46 2024-06-06T21:39:46.738474Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.004281    
2024-06-06 17:40:15 2024-06-06T21:40:15.544549Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.003606    
2024-06-06 17:41:18 2024-06-06T21:41:18.501306Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.002886    
2024-06-06 17:42:02 2024-06-06T21:42:02.964658Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.002144    
2024-06-06 17:44:02 2024-06-06T21:44:02.183752Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 81 "-" "python-httpx/0.27.0" 0.004817    
2024-06-06 17:44:51 2024-06-06T21:44:51.762030Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 81 "-" "python-httpx/0.27.0" 0.002278    
2024-06-06 17:49:09 2024-06-06T21:49:09.520148Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.004542    
2024-06-06 17:55:34 2024-06-06T21:55:34.002284Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.005445    
2024-06-06 20:34:39 2024-06-07T00:34:39.437998Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.016696    
2024-06-06 20:35:08 2024-06-07T00:35:08.901738Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.007096    
2024-06-06 20:37:25 2024-06-07T00:37:25.842018Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.010003    
2024-06-08 16:15:28 2024-06-08T20:15:28.616204Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 80 "-" "python-httpx/0.27.0" 0.078516    
2024-06-08 16:16:24 2024-06-08T20:16:24.666616Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.006603    
2024-06-08 16:17:10 2024-06-08T20:17:10.946580Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.020214    
2024-06-08 16:18:22 2024-06-08T20:18:22.992668Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.003382    
2024-06-08 16:28:17 2024-06-08T20:28:17.704446Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.018745    
2024-06-08 16:28:53 2024-06-08T20:28:53.567523Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.004381    
2024-06-08 16:32:13 2024-06-08T20:32:13.435191Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.010554    
2024-06-08 16:33:43 2024-06-08T20:33:43.750737Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.004759    
2024-06-08 16:34:20 2024-06-08T20:34:20.002350Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.006619    
2024-06-08 16:37:28 2024-06-08T20:37:28.296824Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.008312    
2024-06-08 16:38:37 2024-06-08T20:38:37.283119Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 81 "-" "python-httpx/0.27.0" 0.011817    
2024-06-08 16:39:06 2024-06-08T20:39:06.693892Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.005006    
2024-06-08 16:59:21 2024-06-08T20:59:21.118491Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.021067    
2024-06-08 17:02:33 2024-06-08T21:02:33.042058Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.008317    
2024-06-08 17:05:28 2024-06-08T21:05:28.820921Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.008023    
2024-06-08 17:07:01 2024-06-08T21:07:01.628402Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.009758    
2024-06-08 17:08:00 2024-06-08T21:08:00.331748Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.004214    
2024-06-08 17:12:42 2024-06-08T21:12:42.702197Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 80 "-" "python-httpx/0.27.0" 0.008765    
2024-06-08 17:14:30 2024-06-08T21:14:30.666089Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.010849    
2024-06-08 17:16:19 2024-06-08T21:16:19.265357Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.004405    
2024-06-08 17:21:13 2024-06-08T21:21:13.600182Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.007299    
2024-06-08 17:21:37 2024-06-08T21:21:37.602673Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.004230    
2024-06-08 17:22:46 2024-06-08T21:22:46.355899Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.005859    
2024-06-08 17:23:50 2024-06-08T21:23:50.822800Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 80 "-" "python-httpx/0.27.0" 0.002775    
2024-06-08 17:25:54 2024-06-08T21:25:54.454808Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.004154    
2024-06-08 17:27:33 2024-06-08T21:27:33.028492Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.015285    
2024-06-08 17:29:18 2024-06-08T21:29:18.939563Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.002594    
2024-06-08 17:31:38 2024-06-08T21:31:38.373479Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.009529    
2024-06-08 17:34:12 2024-06-08T21:34:12.023494Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.004533    
2024-06-08 18:39:22 2024-06-08T22:39:22.055960Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 81 "-" "python-httpx/0.27.0" 0.012095    
2024-06-08 18:41:05 2024-06-08T22:41:05.303859Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.008363    
2024-06-08 18:55:23 2024-06-08T22:55:23.473428Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.022931    
2024-06-08 18:56:17 2024-06-08T22:56:17.160799Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.005532    
2024-06-08 18:59:24 2024-06-08T22:59:24.389483Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.007024    
2024-06-08 19:02:39 2024-06-08T23:02:39.756310Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.016447    
2024-06-08 19:03:29 2024-06-08T23:03:29.466119Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.003908    
2024-06-08 19:07:15 2024-06-08T23:07:15.712904Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 81 "-" "python-httpx/0.27.0" 0.007226    
2024-06-08 19:13:26 2024-06-08T23:13:26.127385Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 81 "-" "python-httpx/0.27.0" 0.006855    
2024-06-08 19:16:53 2024-06-08T23:16:53.484391Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.005009    
2024-06-08 19:18:43 2024-06-08T23:18:43.215337Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.005155    
2024-06-08 19:23:06 2024-06-08T23:23:06.292508Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.019109    
2024-06-08 19:27:02 2024-06-08T23:27:02.871087Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.007899    
2024-06-08 19:27:58 2024-06-08T23:27:58.583811Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.003685    
2024-06-08 19:28:44 2024-06-08T23:28:44.524133Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.007180    
2024-06-08 19:29:46 2024-06-08T23:29:46.448286Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.002315    
2024-06-08 19:31:12 2024-06-08T23:31:12.736875Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.004207    
2024-06-08 19:35:57 2024-06-08T23:35:57.444443Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.029795    
2024-06-08 19:38:28 2024-06-08T23:38:28.676805Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.004494    
2024-06-08 19:42:22 2024-06-08T23:42:22.540284Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.011529    
2024-06-08 19:43:24 2024-06-08T23:43:24.112641Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.008782    
2024-06-08 19:44:52 2024-06-08T23:44:52.844812Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.005463    
2024-06-08 19:47:14 2024-06-08T23:47:14.957262Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.005471    
2024-06-08 19:48:44 2024-06-08T23:48:44.737927Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.003142    
2024-06-08 19:56:14 2024-06-08T23:56:14.983449Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.013973    
2024-06-08 19:57:44 2024-06-08T23:57:44.231138Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.003071    
2024-06-08 19:58:39 2024-06-08T23:58:39.463263Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.004469    
2024-06-08 20:04:59 2024-06-09T00:04:59.349459Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 79 "-" "python-httpx/0.27.0" 0.004446    
2024-06-08 20:05:55 2024-06-09T00:05:55.253530Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.002398    
2024-06-08 20:06:41 2024-06-09T00:06:41.771595Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.002786    
2024-06-08 20:08:28 2024-06-09T00:08:28.179468Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.003368    
2024-06-08 20:09:46 2024-06-09T00:09:46.880475Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.012587    
2024-06-08 20:10:30 2024-06-09T00:10:30.742542Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.002770    
2024-06-08 20:11:55 2024-06-09T00:11:55.979827Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.009126    
2024-06-08 20:13:32 2024-06-09T00:13:32.048382Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.004062    
2024-06-08 20:14:32 2024-06-09T00:14:32.358553Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.004184    
2024-06-08 20:15:10 2024-06-09T00:15:10.244251Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.012423    
2024-06-08 20:15:50 2024-06-09T00:15:50.425349Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.006025    
2024-06-08 20:16:48 2024-06-09T00:16:48.777797Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.002530    
2024-06-08 20:18:41 2024-06-09T00:18:41.779975Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.002351    
2024-06-08 20:19:21 2024-06-09T00:19:21.719890Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 79 "-" "python-httpx/0.27.0" 0.002859    
2024-06-08 20:19:49 2024-06-09T00:19:49.560563Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.002080    
2024-06-08 20:24:05 2024-06-09T00:24:05.543452Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.004448    
2024-06-08 20:25:23 2024-06-09T00:25:23.391594Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.003599    
2024-06-08 20:28:44 2024-06-09T00:28:44.438268Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.004517    
2024-06-08 20:33:48 2024-06-09T00:33:48.974877Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.009537    
2024-06-08 20:35:42 2024-06-09T00:35:42.868222Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.006818    
2024-06-08 20:36:12 2024-06-09T00:36:12.403338Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 79 "-" "python-httpx/0.27.0" 0.015848    
2024-06-08 20:36:52 2024-06-09T00:36:52.451565Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.003318    
2024-06-08 20:38:21 2024-06-09T00:38:21.683500Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.006101    
2024-06-08 20:39:34 2024-06-09T00:39:34.909696Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.004618    
2024-06-08 20:39:45 2024-06-09T00:39:45.602602Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.002445    
2024-06-08 20:40:58 2024-06-09T00:40:58.216536Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.002362    
2024-06-08 20:41:52 2024-06-09T00:41:52.776774Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.003516    
2024-06-08 20:43:05 2024-06-09T00:43:05.702633Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.004078    
2024-06-08 20:45:03 2024-06-09T00:45:03.332551Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.002720    
2024-06-08 20:46:36 2024-06-09T00:46:36.241017Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.003496    
2024-06-08 20:49:31 2024-06-09T00:49:31.142804Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.004230    
2024-06-08 20:51:34 2024-06-09T00:51:34.092632Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.003445    
2024-06-08 20:52:44 2024-06-09T00:52:44.504236Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.003401    
2024-06-08 20:53:55 2024-06-09T00:53:55.408997Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.002531    
2024-06-08 20:55:50 2024-06-09T00:55:50.270685Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.004017    
2024-06-08 20:58:47 2024-06-09T00:58:47.042623Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 81 "-" "python-httpx/0.27.0" 0.004261    
2024-06-08 21:01:28 2024-06-09T01:01:28.702599Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.004232    
2024-06-08 21:02:31 2024-06-09T01:02:31.726165Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.006029    
2024-06-08 21:06:42 2024-06-09T01:06:42.343980Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.004514    
2024-06-08 21:18:47 2024-06-09T01:18:47.032063Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.009318    
2024-06-08 21:19:12 2024-06-09T01:19:12.890531Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.003776    
2024-06-08 21:20:29 2024-06-09T01:20:29.530001Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.004027    
2024-06-08 21:20:52 2024-06-09T01:20:52.459326Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.002221    
2024-06-08 21:23:17 2024-06-09T01:23:17.740513Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 81 "-" "python-httpx/0.27.0" 0.002187    
2024-06-08 22:30:21 2024-06-09T02:30:21.951182Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.017747    
2024-06-08 22:30:57 2024-06-09T02:30:57.894240Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.005839    
2024-06-08 22:31:46 2024-06-09T02:31:46.052023Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.013518    
2024-06-08 22:32:06 2024-06-09T02:32:06.009376Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.009169    
2024-06-08 22:32:24 2024-06-09T02:32:24.431146Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.005005    
2024-06-08 22:32:57 2024-06-09T02:32:57.390219Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.002511    
2024-06-08 22:34:18 2024-06-09T02:34:18.821478Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.006426    
2024-06-08 22:34:54 2024-06-09T02:34:54.742271Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 80 "-" "python-httpx/0.27.0" 0.004750    
2024-06-08 22:35:23 2024-06-09T02:35:23.929360Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.004124    
2024-06-08 22:36:13 2024-06-09T02:36:13.064409Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.013506    
2024-06-08 22:36:47 2024-06-09T02:36:47.435310Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.008353    
2024-06-08 22:39:12 2024-06-09T02:39:12.123719Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.014935    
2024-06-08 22:39:44 2024-06-09T02:39:44.607951Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.002482    
2024-06-08 22:43:12 2024-06-09T02:43:12.275590Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.006569    
2024-06-08 22:45:09 2024-06-09T02:45:09.953993Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.013891    
2024-06-08 22:49:44 2024-06-09T02:49:44.646563Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.064453    
2024-06-08 22:50:53 2024-06-09T02:50:53.643671Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.006191    
2024-06-08 22:51:22 2024-06-09T02:51:22.612426Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.004706    
2024-06-08 22:55:00 2024-06-09T02:55:00.059461Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.014930    
2024-06-08 23:05:13 2024-06-09T03:05:13.226927Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 79 "-" "python-httpx/0.27.0" 0.034042    
2024-06-08 23:06:10 2024-06-09T03:06:10.265890Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 77 "-" "python-httpx/0.27.0" 0.004660    
2024-06-08 23:09:37 2024-06-09T03:09:37.229602Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.005498    
2024-06-08 23:10:47 2024-06-09T03:10:47.830632Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 80 "-" "python-httpx/0.27.0" 0.003651    
2024-06-08 23:11:25 2024-06-09T03:11:25.471374Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.007037    
2024-06-08 23:12:28 2024-06-09T03:12:28.670598Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.002350    
2024-06-08 23:12:50 2024-06-09T03:12:50.918553Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.002619    
2024-06-08 23:13:49 2024-06-09T03:13:49.145066Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 81 "-" "python-httpx/0.27.0" 0.002893    
2024-06-08 23:14:18 2024-06-09T03:14:18.000675Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.003284    
2024-06-08 23:16:09 2024-06-09T03:16:09.729626Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.001588    
2024-06-08 23:17:20 2024-06-09T03:17:20.417611Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.003190    
2024-06-13 12:15:07            _                 _    
2024-06-13 12:15:07   __ _  __| |_ __ __ _ _ __ | |_  
2024-06-13 12:15:07  / _` |/ _` | '__/ _` | '_ \| __|
2024-06-13 12:15:07 | (_| | (_| | | | (_| | | | | |_  
2024-06-13 12:15:07  \__, |\__,_|_|  \__,_|_| |_|\__|
2024-06-13 12:15:07     |_|                           
2024-06-13 12:15:07
2024-06-13 12:15:07 Version: 1.9.4, build: 671cf97b
2024-06-13 12:15:07 Access web UI at http://localhost:6333/dashboard
2024-06-13 12:15:07
2024-06-13 12:15:07 2024-06-13T16:15:07.949147Z  INFO storage::content_manager::consensus::persistent: Loading raft state from ./storage/raft_state.json    
2024-06-13 12:15:08 2024-06-13T16:15:08.069808Z  INFO storage::content_manager::toc: Loading collection: books    
2024-06-13 12:19:47 2024-06-13T16:19:47.893576Z  INFO collection::shards::local_shard: Recovering collection books: 0/1 (0%)    
2024-06-13 12:19:47 2024-06-13T16:19:47.990391Z  INFO collection::shards::local_shard: Recovered collection books: 1/1 (100%)    
2024-06-13 12:20:18 2024-06-13T16:20:18.550631Z  INFO qdrant: Distributed mode disabled    
2024-06-13 12:20:18 2024-06-13T16:20:18.553371Z  INFO qdrant: Telemetry reporting enabled, id: b88f95a5-34b5-482b-9fe9-682b7190dd04    
2024-06-13 12:20:18 2024-06-13T16:20:18.581895Z  INFO qdrant::actix: TLS disabled for REST API    
2024-06-13 12:20:18 2024-06-13T16:20:18.582821Z  INFO qdrant::tonic: Qdrant gRPC listening on 6334    
2024-06-13 12:20:18 2024-06-13T16:20:18.582869Z  INFO qdrant::tonic: TLS disabled for gRPC API    
2024-06-13 12:20:18 2024-06-13T16:20:18.584602Z  INFO qdrant::actix: Qdrant HTTP listening on 6333    
2024-06-13 12:20:18 2024-06-13T16:20:18.586114Z  INFO actix_server::builder: Starting 3 workers
2024-06-13 12:20:18 2024-06-13T16:20:18.586327Z  INFO actix_server::server: Actix runtime found; starting in Actix runtime
2024-06-13 12:22:22 2024-06-13T16:22:22.327756Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.010382    
2024-06-13 12:23:03 2024-06-13T16:23:03.906729Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.002847    
2024-06-13 12:27:23 2024-06-13T16:27:23.372805Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.001912    
2024-06-13 13:25:12 2024-06-13T17:25:12.751607Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 81 "-" "python-httpx/0.27.0" 0.005776    
2024-06-13 13:34:34 2024-06-13T17:34:34.701784Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.003155    
2024-06-13 13:34:39 2024-06-13T17:34:39.893467Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.001448    
2024-06-13 13:36:09 2024-06-13T17:36:09.074010Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.001115    
2024-06-13 13:37:28 2024-06-13T17:37:28.197585Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.001837    
2024-06-13 13:38:14 2024-06-13T17:38:14.779902Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.002651    
2024-06-13 13:38:52 2024-06-13T17:38:52.821389Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.002649    
2024-06-13 13:39:53 2024-06-13T17:39:53.964834Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.002209    
2024-06-13 13:45:03 2024-06-13T17:45:03.198296Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.003958    
2024-06-13 13:46:44 2024-06-13T17:46:44.859607Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.015254    
2024-06-13 13:51:46 2024-06-13T17:51:46.929458Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.002610    
2024-06-13 13:53:10 2024-06-13T17:53:10.773210Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 81 "-" "python-httpx/0.27.0" 0.003331    
2024-06-13 14:00:27 2024-06-13T18:00:27.850900Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.001581    
2024-06-13 14:01:29 2024-06-13T18:01:29.316494Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 14:01:29 2024-06-13T18:01:29.456803Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.150639    
2024-06-13 14:01:29 2024-06-13T18:01:29.463069Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 83 "-" "python-httpx/0.27.0" 0.000791    
2024-06-13 14:01:29 2024-06-13T18:01:29.466600Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 14:01:29 2024-06-13T18:01:29.467543Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 72 "-" "python-httpx/0.27.0" 0.001249    
2024-06-13 14:01:29 2024-06-13T18:01:29.474954Z  INFO storage::content_manager::toc::collection_meta_ops: Creating collection books    
2024-06-13 14:01:29 2024-06-13T18:01:29.985882Z  INFO actix_web::middleware::logger: 172.20.0.1 "PUT /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.515759    
2024-06-13 14:19:32 2024-06-13T18:19:32.914762Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /dashboard HTTP/1.1" 200 920 "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36" 0.038182    
2024-06-13 14:19:33 2024-06-13T18:19:33.032590Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /dashboard/assets/index-58efb4cc.css HTTP/1.1" 200 23946 "http://localhost:6333/dashboard" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36" 0.016747    
2024-06-13 14:19:33 2024-06-13T18:19:33.160778Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /dashboard/assets/index-8dfa2cda.js HTTP/1.1" 200 1380014 "http://localhost:6333/dashboard" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36" 0.188588    
2024-06-13 14:19:33 2024-06-13T18:19:33.336362Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /issues HTTP/1.1" 200 60 "http://localhost:6333/dashboard" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36" 0.001373    
2024-06-13 14:19:33 2024-06-13T18:19:33.338742Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections HTTP/1.1" 200 73 "http://localhost:6333/dashboard" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36" 0.002443    
2024-06-13 14:19:33 2024-06-13T18:19:33.339776Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /dashboard/logo.png HTTP/1.1" 200 9339 "http://localhost:6333/dashboard" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36" 0.002091    
2024-06-13 14:19:33 2024-06-13T18:19:33.559311Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /dashboard/favicon.ico HTTP/1.1" 200 15086 "http://localhost:6333/dashboard" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36" 0.004930    
2024-06-13 14:19:33 2024-06-13T18:19:33.574713Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /dashboard/manifest.json HTTP/1.1" 200 248 "http://localhost:6333/dashboard" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36" 0.013443    
2024-06-13 14:19:33 2024-06-13T18:19:33.586921Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /dashboard/logo192.png HTTP/1.1" 200 8870 "http://localhost:6333/dashboard" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36" 0.001664    
2024-06-13 14:19:34 2024-06-13T18:19:34.781629Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books HTTP/1.1" 200 397 "http://localhost:6333/dashboard" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36" 0.019430    
2024-06-13 14:19:34 2024-06-13T18:19:34.785370Z  INFO actix_web::middleware::logger: 172.20.0.1 "POST /collections/books/points/scroll HTTP/1.1" 200 77 "http://localhost:6333/dashboard" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36" 0.011712    
2024-06-13 14:19:36 2024-06-13T18:19:36.674663Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books HTTP/1.1" 200 396 "http://localhost:6333/dashboard" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36" 0.001325    
2024-06-13 14:19:36 2024-06-13T18:19:36.676334Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/cluster HTTP/1.1" 200 143 "http://localhost:6333/dashboard" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36" 0.003641    
2024-06-13 16:18:15 2024-06-13T20:18:15.781647Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 16:18:15 2024-06-13T20:18:15.877585Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.103641    
2024-06-13 16:18:15 2024-06-13T20:18:15.886516Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 83 "-" "python-httpx/0.27.0" 0.001858    
2024-06-13 16:18:15 2024-06-13T20:18:15.894220Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 16:18:15 2024-06-13T20:18:15.896487Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 72 "-" "python-httpx/0.27.0" 0.004114    
2024-06-13 16:18:15 2024-06-13T20:18:15.947077Z  INFO storage::content_manager::toc::collection_meta_ops: Creating collection books    
2024-06-13 16:18:16 2024-06-13T20:18:16.457795Z  INFO actix_web::middleware::logger: 172.20.0.1 "PUT /collections/books HTTP/1.1" 200 70 "-" "python-httpx/0.27.0" 0.537839    
2024-06-13 16:18:26 2024-06-13T20:18:26.884350Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 16:18:26 2024-06-13T20:18:26.986290Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 68 "-" "python-httpx/0.27.0" 0.104507    
2024-06-13 16:18:26 2024-06-13T20:18:26.994750Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 83 "-" "python-httpx/0.27.0" 0.001248    
2024-06-13 16:18:26 2024-06-13T20:18:26.999015Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 16:18:27 2024-06-13T20:18:27.000622Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 72 "-" "python-httpx/0.27.0" 0.001950    
2024-06-13 16:18:27 2024-06-13T20:18:27.005568Z  INFO storage::content_manager::toc::collection_meta_ops: Creating collection books    
2024-06-13 16:18:27 2024-06-13T20:18:27.443234Z  INFO actix_web::middleware::logger: 172.20.0.1 "PUT /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.438163    
2024-06-13 16:18:58 2024-06-13T20:18:58.775978Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 16:18:58 2024-06-13T20:18:58.875774Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.100643    
2024-06-13 16:18:58 2024-06-13T20:18:58.882219Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 83 "-" "python-httpx/0.27.0" 0.000723    
2024-06-13 16:18:58 2024-06-13T20:18:58.886595Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 16:18:58 2024-06-13T20:18:58.889028Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 72 "-" "python-httpx/0.27.0" 0.002750    
2024-06-13 16:18:58 2024-06-13T20:18:58.894712Z  INFO storage::content_manager::toc::collection_meta_ops: Creating collection books    
2024-06-13 16:18:59 2024-06-13T20:18:59.293094Z  INFO actix_web::middleware::logger: 172.20.0.1 "PUT /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.398745    
2024-06-13 16:21:31 2024-06-13T20:21:31.613132Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 16:21:31 2024-06-13T20:21:31.764272Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.153738    
2024-06-13 16:21:31 2024-06-13T20:21:31.777049Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 83 "-" "python-httpx/0.27.0" 0.001147    
2024-06-13 16:21:31 2024-06-13T20:21:31.781502Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 16:21:31 2024-06-13T20:21:31.783554Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 72 "-" "python-httpx/0.27.0" 0.002437    
2024-06-13 16:21:31 2024-06-13T20:21:31.789970Z  INFO storage::content_manager::toc::collection_meta_ops: Creating collection books    
2024-06-13 16:21:32 2024-06-13T20:21:32.307558Z  INFO actix_web::middleware::logger: 172.20.0.1 "PUT /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.518032    
2024-06-13 16:38:55 2024-06-13T20:38:55.139126Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 16:38:55 2024-06-13T20:38:55.254385Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.122248    
2024-06-13 16:38:55 2024-06-13T20:38:55.269988Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 83 "-" "python-httpx/0.27.0" 0.003020    
2024-06-13 16:38:55 2024-06-13T20:38:55.274160Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 16:38:55 2024-06-13T20:38:55.275781Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 72 "-" "python-httpx/0.27.0" 0.001776    
2024-06-13 16:38:55 2024-06-13T20:38:55.281854Z  INFO storage::content_manager::toc::collection_meta_ops: Creating collection books    
2024-06-13 16:38:55 2024-06-13T20:38:55.845618Z  INFO actix_web::middleware::logger: 172.20.0.1 "PUT /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.564416    
2024-06-13 16:54:37 2024-06-13T20:54:37.087202Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 16:54:37 2024-06-13T20:54:37.204760Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.122352    
2024-06-13 16:54:37 2024-06-13T20:54:37.211508Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 83 "-" "python-httpx/0.27.0" 0.001031    
2024-06-13 16:54:37 2024-06-13T20:54:37.215902Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 16:54:37 2024-06-13T20:54:37.218414Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 72 "-" "python-httpx/0.27.0" 0.002873    
2024-06-13 16:54:37 2024-06-13T20:54:37.223473Z  INFO storage::content_manager::toc::collection_meta_ops: Creating collection books    
2024-06-13 16:54:37 2024-06-13T20:54:37.719639Z  INFO actix_web::middleware::logger: 172.20.0.1 "PUT /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.497469    
2024-06-13 16:54:58 2024-06-13T20:54:58.497763Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 16:54:58 2024-06-13T20:54:58.502501Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 16:54:58 2024-06-13T20:54:58.498630Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 16:54:58 2024-06-13T20:54:58.502964Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 16:54:58 2024-06-13T20:54:58.502988Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 16:54:58 2024-06-13T20:54:58.503155Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 16:54:58 2024-06-13T20:54:58.504629Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 16:54:58 2024-06-13T20:54:58.508789Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 16:54:58 2024-06-13T20:54:58.533796Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 16:54:58 2024-06-13T20:54:58.533943Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 16:54:58 2024-06-13T20:54:58.534016Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 16:54:58 2024-06-13T20:54:58.534085Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 16:54:58 2024-06-13T20:54:58.534252Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 16:54:58 2024-06-13T20:54:58.534392Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 16:54:58 2024-06-13T20:54:58.534744Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 16:54:58 2024-06-13T20:54:58.535147Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 16:54:58 2024-06-13T20:54:58.559838Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 16:54:58 2024-06-13T20:54:58.563465Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 16:54:58 2024-06-13T20:54:58.564148Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 16:54:58 2024-06-13T20:54:58.570756Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 16:54:58 2024-06-13T20:54:58.570864Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 16:54:58 2024-06-13T20:54:58.571572Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 16:54:58 2024-06-13T20:54:58.571876Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 16:54:58 2024-06-13T20:54:58.572882Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 16:54:58 2024-06-13T20:54:58.574097Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 16:54:58 2024-06-13T20:54:58.574264Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 16:54:58 2024-06-13T20:54:58.574322Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 16:54:58 2024-06-13T20:54:58.579465Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 16:54:58 2024-06-13T20:54:58.581591Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 16:54:58 2024-06-13T20:54:58.581597Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 16:54:58 2024-06-13T20:54:58.581660Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 16:54:58 2024-06-13T20:54:58.581664Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 16:54:58 2024-06-13T20:54:58.585844Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 16:54:58 2024-06-13T20:54:58.588239Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 16:54:58 2024-06-13T20:54:58.588661Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 16:54:58 2024-06-13T20:54:58.589318Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 16:54:58 2024-06-13T20:54:58.593119Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 16:54:58 2024-06-13T20:54:58.593473Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 16:54:58 2024-06-13T20:54:58.593476Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 16:54:58 2024-06-13T20:54:58.593634Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 16:54:58 2024-06-13T20:54:58.596981Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 16:54:58 2024-06-13T20:54:58.597308Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 16:54:58 2024-06-13T20:54:58.598183Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 16:54:58 2024-06-13T20:54:58.600805Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 16:54:58 2024-06-13T20:54:58.600803Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 16:54:58 2024-06-13T20:54:58.600875Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 16:54:58 2024-06-13T20:54:58.600922Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 16:54:58 2024-06-13T20:54:58.603651Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 16:54:58 2024-06-13T20:54:58.606453Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 16:54:58 2024-06-13T20:54:58.606584Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 16:54:58 2024-06-13T20:54:58.607351Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 16:54:58 2024-06-13T20:54:58.607392Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 16:54:58 2024-06-13T20:54:58.607936Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 16:54:58 2024-06-13T20:54:58.607988Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 16:54:58 2024-06-13T20:54:58.611596Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 16:54:58 2024-06-13T20:54:58.614552Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 16:54:58 2024-06-13T20:54:58.615417Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 16:54:58 2024-06-13T20:54:58.615391Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 16:54:58 2024-06-13T20:54:58.615478Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 16:54:58 2024-06-13T20:54:58.615576Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 16:54:58 2024-06-13T20:54:58.616865Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 16:54:58 2024-06-13T20:54:58.617865Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 16:54:58 2024-06-13T20:54:58.623379Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 16:54:58 2024-06-13T20:54:58.626636Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 16:54:59 2024-06-13T20:54:59.254503Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 16:54:59 2024-06-13T20:54:59.257854Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 16:54:59 2024-06-13T20:54:59.284019Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 16:54:59 2024-06-13T20:54:59.289401Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 16:54:59 2024-06-13T20:54:59.331093Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 16:54:59 2024-06-13T20:54:59.334595Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 16:56:12 2024-06-13T20:56:12.388971Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 16:56:12 2024-06-13T20:56:12.500134Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.111856    
2024-06-13 16:56:12 2024-06-13T20:56:12.510419Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 83 "-" "python-httpx/0.27.0" 0.003098    
2024-06-13 16:56:12 2024-06-13T20:56:12.514736Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 16:56:12 2024-06-13T20:56:12.516999Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 72 "-" "python-httpx/0.27.0" 0.002413    
2024-06-13 16:56:12 2024-06-13T20:56:12.520433Z  INFO storage::content_manager::toc::collection_meta_ops: Creating collection books    
2024-06-13 16:56:12 2024-06-13T20:56:12.921126Z  INFO actix_web::middleware::logger: 172.20.0.1 "PUT /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.400951    
2024-06-13 16:57:57 2024-06-13T20:57:57.078220Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 16:57:57 2024-06-13T20:57:57.172942Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 70 "-" "python-httpx/0.27.0" 0.095658    
2024-06-13 16:57:57 2024-06-13T20:57:57.179778Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 83 "-" "python-httpx/0.27.0" 0.001474    
2024-06-13 16:57:57 2024-06-13T20:57:57.183815Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 16:57:57 2024-06-13T20:57:57.185000Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 72 "-" "python-httpx/0.27.0" 0.001698    
2024-06-13 16:57:57 2024-06-13T20:57:57.189056Z  INFO storage::content_manager::toc::collection_meta_ops: Creating collection books    
2024-06-13 16:57:57 2024-06-13T20:57:57.728360Z  INFO actix_web::middleware::logger: 172.20.0.1 "PUT /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.539512    
2024-06-13 16:58:06 2024-06-13T20:58:06.036989Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 16:58:06 2024-06-13T20:58:06.128699Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.096532    
2024-06-13 16:58:06 2024-06-13T20:58:06.134506Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 83 "-" "python-httpx/0.27.0" 0.000755    
2024-06-13 16:58:06 2024-06-13T20:58:06.138643Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 16:58:06 2024-06-13T20:58:06.140053Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 72 "-" "python-httpx/0.27.0" 0.001545    
2024-06-13 16:58:06 2024-06-13T20:58:06.143523Z  INFO storage::content_manager::toc::collection_meta_ops: Creating collection books    
2024-06-13 16:58:06 2024-06-13T20:58:06.796622Z  INFO actix_web::middleware::logger: 172.20.0.1 "PUT /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.653257    
2024-06-13 16:59:11 2024-06-13T20:59:11.538642Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 16:59:11 2024-06-13T20:59:11.641586Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.104566    
2024-06-13 16:59:11 2024-06-13T20:59:11.646463Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.000728    
2024-06-13 16:59:11 2024-06-13T20:59:11.650322Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 16:59:11 2024-06-13T20:59:11.651808Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 72 "-" "python-httpx/0.27.0" 0.001668    
2024-06-13 16:59:11 2024-06-13T20:59:11.656138Z  INFO storage::content_manager::toc::collection_meta_ops: Creating collection books    
2024-06-13 16:59:12 2024-06-13T20:59:12.137136Z  INFO actix_web::middleware::logger: 172.20.0.1 "PUT /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.481356    
2024-06-13 17:00:01 2024-06-13T21:00:01.328536Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 17:00:01 2024-06-13T21:00:01.806745Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.479596    
2024-06-13 17:00:01 2024-06-13T21:00:01.813917Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 83 "-" "python-httpx/0.27.0" 0.001108    
2024-06-13 17:00:01 2024-06-13T21:00:01.819004Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 17:00:01 2024-06-13T21:00:01.820277Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 72 "-" "python-httpx/0.27.0" 0.001429    
2024-06-13 17:00:01 2024-06-13T21:00:01.825232Z  INFO storage::content_manager::toc::collection_meta_ops: Creating collection books    
2024-06-13 17:00:02 2024-06-13T21:00:02.265186Z  INFO actix_web::middleware::logger: 172.20.0.1 "PUT /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.440085    
2024-06-13 17:00:46 2024-06-13T21:00:46.323759Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 17:00:46 2024-06-13T21:00:46.445971Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 70 "-" "python-httpx/0.27.0" 0.123153    
2024-06-13 17:00:46 2024-06-13T21:00:46.454373Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 83 "-" "python-httpx/0.27.0" 0.000901    
2024-06-13 17:00:46 2024-06-13T21:00:46.460174Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 17:00:46 2024-06-13T21:00:46.461950Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 72 "-" "python-httpx/0.27.0" 0.001954    
2024-06-13 17:00:46 2024-06-13T21:00:46.473905Z  INFO storage::content_manager::toc::collection_meta_ops: Creating collection books    
2024-06-13 17:00:47 2024-06-13T21:00:47.189786Z  INFO actix_web::middleware::logger: 172.20.0.1 "PUT /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.716079    
2024-06-13 17:04:33 2024-06-13T21:04:33.548147Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 17:04:33 2024-06-13T21:04:33.667100Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.119852    
2024-06-13 17:04:33 2024-06-13T21:04:33.672760Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 83 "-" "python-httpx/0.27.0" 0.000990    
2024-06-13 17:04:33 2024-06-13T21:04:33.677220Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 17:04:33 2024-06-13T21:04:33.678686Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 72 "-" "python-httpx/0.27.0" 0.001592    
2024-06-13 17:04:33 2024-06-13T21:04:33.682943Z  INFO storage::content_manager::toc::collection_meta_ops: Creating collection books    
2024-06-13 17:04:34 2024-06-13T21:04:34.858520Z  INFO actix_web::middleware::logger: 172.20.0.1 "PUT /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 1.176011    
2024-06-13 17:04:55 2024-06-13T21:04:55.249087Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 17:04:55 2024-06-13T21:04:55.249444Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 17:04:55 2024-06-13T21:04:55.251081Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 17:04:55 2024-06-13T21:04:55.251141Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 17:04:55 2024-06-13T21:04:55.251533Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 17:04:55 2024-06-13T21:04:55.251936Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 17:04:55 2024-06-13T21:04:55.251967Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 17:04:55 2024-06-13T21:04:55.252152Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 17:04:55 2024-06-13T21:04:55.275042Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 17:04:55 2024-06-13T21:04:55.275521Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 17:04:55 2024-06-13T21:04:55.275632Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 17:04:55 2024-06-13T21:04:55.275703Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 17:04:55 2024-06-13T21:04:55.275966Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 17:04:55 2024-06-13T21:04:55.276071Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 17:04:55 2024-06-13T21:04:55.276131Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 17:04:55 2024-06-13T21:04:55.276160Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 17:04:55 2024-06-13T21:04:55.290443Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 17:04:55 2024-06-13T21:04:55.291639Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 17:04:55 2024-06-13T21:04:55.292826Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 17:04:55 2024-06-13T21:04:55.293846Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 17:04:55 2024-06-13T21:04:55.294167Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 17:04:55 2024-06-13T21:04:55.295173Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 17:04:55 2024-06-13T21:04:55.296446Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 17:04:55 2024-06-13T21:04:55.297902Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 17:04:55 2024-06-13T21:04:55.298888Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 17:04:55 2024-06-13T21:04:55.299940Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 17:04:55 2024-06-13T21:04:55.300075Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 17:04:55 2024-06-13T21:04:55.301960Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 17:04:55 2024-06-13T21:04:55.302055Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 17:04:55 2024-06-13T21:04:55.302580Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 17:04:55 2024-06-13T21:04:55.305963Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 17:04:55 2024-06-13T21:04:55.309768Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 17:04:55 2024-06-13T21:04:55.309821Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 17:04:55 2024-06-13T21:04:55.310454Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 17:04:55 2024-06-13T21:04:55.312906Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 17:04:55 2024-06-13T21:04:55.314855Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 17:04:55 2024-06-13T21:04:55.315014Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 17:04:55 2024-06-13T21:04:55.316134Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 17:04:55 2024-06-13T21:04:55.317162Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 17:04:55 2024-06-13T21:04:55.317496Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 17:04:55 2024-06-13T21:04:55.317601Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 17:04:55 2024-06-13T21:04:55.317642Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 17:04:55 2024-06-13T21:04:55.319864Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 17:04:55 2024-06-13T21:04:55.319868Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 17:04:55 2024-06-13T21:04:55.322339Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 17:04:55 2024-06-13T21:04:55.321770Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 17:04:55 2024-06-13T21:04:55.323170Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 17:04:55 2024-06-13T21:04:55.325665Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 17:04:55 2024-06-13T21:04:55.328957Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 17:04:55 2024-06-13T21:04:55.329116Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 17:04:55 2024-06-13T21:04:55.329141Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 17:04:55 2024-06-13T21:04:55.329148Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 17:04:55 2024-06-13T21:04:55.329173Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 17:04:55 2024-06-13T21:04:55.331841Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 17:04:55 2024-06-13T21:04:55.333431Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 17:04:55 2024-06-13T21:04:55.334895Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 17:04:55 2024-06-13T21:04:55.335164Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 17:04:55 2024-06-13T21:04:55.336269Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 17:04:55 2024-06-13T21:04:55.336969Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 17:04:55 2024-06-13T21:04:55.337641Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 17:04:55 2024-06-13T21:04:55.339786Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 17:04:55 2024-06-13T21:04:55.339790Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 17:04:55 2024-06-13T21:04:55.340072Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 17:04:55 2024-06-13T21:04:55.343946Z ERROR actix_http::h1::dispatcher: stream error: request parse error: invalid HTTP version specified
2024-06-13 17:05:13 2024-06-13T21:05:13.924500Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 17:05:14 2024-06-13T21:05:14.025070Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.101566    
2024-06-13 17:05:14 2024-06-13T21:05:14.030584Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 83 "-" "python-httpx/0.27.0" 0.000933    
2024-06-13 17:05:14 2024-06-13T21:05:14.034515Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 17:05:14 2024-06-13T21:05:14.035813Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 72 "-" "python-httpx/0.27.0" 0.001449    
2024-06-13 17:05:14 2024-06-13T21:05:14.040319Z  INFO storage::content_manager::toc::collection_meta_ops: Creating collection books    
2024-06-13 17:05:14 2024-06-13T21:05:14.684676Z  INFO actix_web::middleware::logger: 172.20.0.1 "PUT /collections/books HTTP/1.1" 200 70 "-" "python-httpx/0.27.0" 0.644589    
2024-06-13 17:09:21 2024-06-13T21:09:21.229365Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 17:09:21 2024-06-13T21:09:21.335399Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.107507    
2024-06-13 17:09:21 2024-06-13T21:09:21.340567Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 83 "-" "python-httpx/0.27.0" 0.000795    
2024-06-13 17:09:21 2024-06-13T21:09:21.344164Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 17:09:21 2024-06-13T21:09:21.345249Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 72 "-" "python-httpx/0.27.0" 0.001260    
2024-06-13 17:09:21 2024-06-13T21:09:21.349242Z  INFO storage::content_manager::toc::collection_meta_ops: Creating collection books    
2024-06-13 17:09:21 2024-06-13T21:09:21.798068Z  INFO actix_web::middleware::logger: 172.20.0.1 "PUT /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.449151    
2024-06-13 17:11:53 2024-06-13T21:11:53.225251Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 17:11:53 2024-06-13T21:11:53.330048Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.106033    
2024-06-13 17:11:53 2024-06-13T21:11:53.350308Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 83 "-" "python-httpx/0.27.0" 0.001237    
2024-06-13 17:11:53 2024-06-13T21:11:53.354349Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 17:11:53 2024-06-13T21:11:53.355747Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 72 "-" "python-httpx/0.27.0" 0.001749    
2024-06-13 17:11:53 2024-06-13T21:11:53.361572Z  INFO storage::content_manager::toc::collection_meta_ops: Creating collection books    
2024-06-13 17:11:53 2024-06-13T21:11:53.822771Z  INFO actix_web::middleware::logger: 172.20.0.1 "PUT /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.461423    
2024-06-13 17:15:35 2024-06-13T21:15:35.464537Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 17:15:35 2024-06-13T21:15:35.664749Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.201057    
2024-06-13 17:15:35 2024-06-13T21:15:35.675074Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 83 "-" "python-httpx/0.27.0" 0.001003    
2024-06-13 17:15:35 2024-06-13T21:15:35.699350Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 17:15:35 2024-06-13T21:15:35.701795Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 72 "-" "python-httpx/0.27.0" 0.002596    
2024-06-13 17:15:35 2024-06-13T21:15:35.707207Z  INFO storage::content_manager::toc::collection_meta_ops: Creating collection books    
2024-06-13 17:15:36 2024-06-13T21:15:36.551197Z  INFO actix_web::middleware::logger: 172.20.0.1 "PUT /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.844452    
2024-06-13 17:16:04 2024-06-13T21:16:04.106563Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 17:16:04 2024-06-13T21:16:04.208274Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 70 "-" "python-httpx/0.27.0" 0.102915    
2024-06-13 17:16:04 2024-06-13T21:16:04.221588Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 83 "-" "python-httpx/0.27.0" 0.005044    
2024-06-13 17:16:04 2024-06-13T21:16:04.227401Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 17:16:04 2024-06-13T21:16:04.228632Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 72 "-" "python-httpx/0.27.0" 0.001382    
2024-06-13 17:16:04 2024-06-13T21:16:04.233041Z  INFO storage::content_manager::toc::collection_meta_ops: Creating collection books    
2024-06-13 17:16:04 2024-06-13T21:16:04.709900Z  INFO actix_web::middleware::logger: 172.20.0.1 "PUT /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.477014    
2024-06-13 17:25:47 2024-06-13T21:25:47.666394Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 17:25:47 2024-06-13T21:25:47.863026Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 68 "-" "python-httpx/0.27.0" 0.200195    
2024-06-13 17:25:47 2024-06-13T21:25:47.872709Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 83 "-" "python-httpx/0.27.0" 0.002413    
2024-06-13 17:25:47 2024-06-13T21:25:47.879699Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 17:25:47 2024-06-13T21:25:47.884034Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 70 "-" "python-httpx/0.27.0" 0.005614    
2024-06-13 17:25:47 2024-06-13T21:25:47.901512Z  INFO storage::content_manager::toc::collection_meta_ops: Creating collection books    
2024-06-13 17:25:48 2024-06-13T21:25:48.606385Z  INFO actix_web::middleware::logger: 172.20.0.1 "PUT /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.705832    
2024-06-13 17:26:30 2024-06-13T21:26:30.448869Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 17:26:30 2024-06-13T21:26:30.541749Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.094370    
2024-06-13 17:26:30 2024-06-13T21:26:30.547842Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 83 "-" "python-httpx/0.27.0" 0.001075    
2024-06-13 17:26:30 2024-06-13T21:26:30.558754Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 17:26:30 2024-06-13T21:26:30.559952Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 72 "-" "python-httpx/0.27.0" 0.001359    
2024-06-13 17:26:30 2024-06-13T21:26:30.564099Z  INFO storage::content_manager::toc::collection_meta_ops: Creating collection books    
2024-06-13 17:26:31 2024-06-13T21:26:31.099340Z  INFO actix_web::middleware::logger: 172.20.0.1 "PUT /collections/books HTTP/1.1" 200 68 "-" "python-httpx/0.27.0" 0.535489    
2024-06-13 17:26:54 2024-06-13T21:26:54.970342Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 17:26:55 2024-06-13T21:26:55.064217Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.095285    
2024-06-13 17:26:55 2024-06-13T21:26:55.069156Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 83 "-" "python-httpx/0.27.0" 0.000671    
2024-06-13 17:26:55 2024-06-13T21:26:55.072428Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 17:26:55 2024-06-13T21:26:55.073572Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.001289    
2024-06-13 17:26:55 2024-06-13T21:26:55.076277Z  INFO storage::content_manager::toc::collection_meta_ops: Creating collection books    
2024-06-13 17:26:55 2024-06-13T21:26:55.518127Z  INFO actix_web::middleware::logger: 172.20.0.1 "PUT /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.442001    
2024-06-13 17:31:58 2024-06-13T21:31:58.702975Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 17:31:58 2024-06-13T21:31:58.820270Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 70 "-" "python-httpx/0.27.0" 0.126804    
2024-06-13 17:31:58 2024-06-13T21:31:58.828370Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 83 "-" "python-httpx/0.27.0" 0.001330    
2024-06-13 17:31:58 2024-06-13T21:31:58.835643Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 17:31:58 2024-06-13T21:31:58.838574Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 72 "-" "python-httpx/0.27.0" 0.003238    
2024-06-13 17:31:58 2024-06-13T21:31:58.844795Z  INFO storage::content_manager::toc::collection_meta_ops: Creating collection books    
2024-06-13 17:31:59 2024-06-13T21:31:59.509178Z  INFO actix_web::middleware::logger: 172.20.0.1 "PUT /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.664779    
2024-06-13 17:34:58 2024-06-13T21:34:58.571030Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 17:34:58 2024-06-13T21:34:58.717888Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.147952    
2024-06-13 17:34:58 2024-06-13T21:34:58.725076Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 83 "-" "python-httpx/0.27.0" 0.001205    
2024-06-13 17:34:58 2024-06-13T21:34:58.741481Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 17:34:58 2024-06-13T21:34:58.747332Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 72 "-" "python-httpx/0.27.0" 0.007867    
2024-06-13 17:34:58 2024-06-13T21:34:58.755288Z  INFO storage::content_manager::toc::collection_meta_ops: Creating collection books    
2024-06-13 17:34:59 2024-06-13T21:34:59.269182Z  INFO actix_web::middleware::logger: 172.20.0.1 "PUT /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.514214    
2024-06-13 17:36:12 2024-06-13T21:36:12.364415Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 17:36:12 2024-06-13T21:36:12.485024Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.121720    
2024-06-13 17:36:12 2024-06-13T21:36:12.490370Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 83 "-" "python-httpx/0.27.0" 0.001118    
2024-06-13 17:36:12 2024-06-13T21:36:12.494942Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 17:36:12 2024-06-13T21:36:12.496530Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 72 "-" "python-httpx/0.27.0" 0.001810    
2024-06-13 17:36:12 2024-06-13T21:36:12.500172Z  INFO storage::content_manager::toc::collection_meta_ops: Creating collection books    
2024-06-13 17:36:12 2024-06-13T21:36:12.919696Z  INFO actix_web::middleware::logger: 172.20.0.1 "PUT /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.419731    
2024-06-13 17:36:56 2024-06-13T21:36:56.131441Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 17:36:56 2024-06-13T21:36:56.242039Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.111169    
2024-06-13 17:36:56 2024-06-13T21:36:56.247376Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 83 "-" "python-httpx/0.27.0" 0.000745    
2024-06-13 17:36:56 2024-06-13T21:36:56.252568Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 17:36:56 2024-06-13T21:36:56.254869Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.002513    
2024-06-13 17:36:56 2024-06-13T21:36:56.258592Z  INFO storage::content_manager::toc::collection_meta_ops: Creating collection books    
2024-06-13 17:36:56 2024-06-13T21:36:56.716702Z  INFO actix_web::middleware::logger: 172.20.0.1 "PUT /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.458291    
2024-06-13 17:37:37 2024-06-13T21:37:37.440780Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 17:37:37 2024-06-13T21:37:37.546853Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.107288    
2024-06-13 17:37:37 2024-06-13T21:37:37.553179Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 83 "-" "python-httpx/0.27.0" 0.001471    
2024-06-13 17:37:37 2024-06-13T21:37:37.557293Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 17:37:37 2024-06-13T21:37:37.558678Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 72 "-" "python-httpx/0.27.0" 0.001692    
2024-06-13 17:37:37 2024-06-13T21:37:37.563051Z  INFO storage::content_manager::toc::collection_meta_ops: Creating collection books    
2024-06-13 17:37:38 2024-06-13T21:37:38.054636Z  INFO actix_web::middleware::logger: 172.20.0.1 "PUT /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.491753    
2024-06-13 17:39:10 2024-06-13T21:39:10.231333Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 17:39:10 2024-06-13T21:39:10.333212Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.104708    
2024-06-13 17:39:10 2024-06-13T21:39:10.339102Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 83 "-" "python-httpx/0.27.0" 0.001277    
2024-06-13 17:39:10 2024-06-13T21:39:10.343155Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 17:39:10 2024-06-13T21:39:10.344756Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.001749    
2024-06-13 17:39:10 2024-06-13T21:39:10.350055Z  INFO storage::content_manager::toc::collection_meta_ops: Creating collection books    
2024-06-13 17:39:10 2024-06-13T21:39:10.950050Z  INFO actix_web::middleware::logger: 172.20.0.1 "PUT /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.600690    
2024-06-13 17:39:42 2024-06-13T21:39:42.709641Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 17:39:42 2024-06-13T21:39:42.816251Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.107887    
2024-06-13 17:39:42 2024-06-13T21:39:42.821363Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 83 "-" "python-httpx/0.27.0" 0.000957    
2024-06-13 17:39:42 2024-06-13T21:39:42.825206Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 17:39:42 2024-06-13T21:39:42.826419Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.001349    
2024-06-13 17:39:42 2024-06-13T21:39:42.829798Z  INFO storage::content_manager::toc::collection_meta_ops: Creating collection books    
2024-06-13 17:39:43 2024-06-13T21:39:43.328313Z  INFO actix_web::middleware::logger: 172.20.0.1 "PUT /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.498686    
2024-06-13 17:42:10 2024-06-13T21:42:10.845124Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 17:42:10 2024-06-13T21:42:10.987347Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.144455    
2024-06-13 17:42:10 2024-06-13T21:42:10.995170Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 83 "-" "python-httpx/0.27.0" 0.001126    
2024-06-13 17:42:11 2024-06-13T21:42:11.000359Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 17:42:11 2024-06-13T21:42:11.010760Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 72 "-" "python-httpx/0.27.0" 0.010639    
2024-06-13 17:42:11 2024-06-13T21:42:11.021492Z  INFO storage::content_manager::toc::collection_meta_ops: Creating collection books    
2024-06-13 17:42:11 2024-06-13T21:42:11.486474Z  INFO actix_web::middleware::logger: 172.20.0.1 "PUT /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.465340    
2024-06-13 17:53:23 2024-06-13T21:53:23.616347Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 17:53:23 2024-06-13T21:53:23.771828Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.160031    
2024-06-13 17:53:23 2024-06-13T21:53:23.785482Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 83 "-" "python-httpx/0.27.0" 0.003853    
2024-06-13 17:53:23 2024-06-13T21:53:23.795538Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 17:53:23 2024-06-13T21:53:23.798236Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 70 "-" "python-httpx/0.27.0" 0.002854    
2024-06-13 17:53:23 2024-06-13T21:53:23.804164Z  INFO storage::content_manager::toc::collection_meta_ops: Creating collection books    
2024-06-13 17:53:24 2024-06-13T21:53:24.244531Z  INFO actix_web::middleware::logger: 172.20.0.1 "PUT /collections/books HTTP/1.1" 200 70 "-" "python-httpx/0.27.0" 0.441023    
2024-06-13 17:55:43 2024-06-13T21:55:43.537577Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 17:55:43 2024-06-13T21:55:43.973407Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.440475    
2024-06-13 17:55:43 2024-06-13T21:55:43.986604Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 83 "-" "python-httpx/0.27.0" 0.002745    
2024-06-13 17:55:43 2024-06-13T21:55:43.993805Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 17:55:43 2024-06-13T21:55:43.996894Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 72 "-" "python-httpx/0.27.0" 0.004018    
2024-06-13 17:55:44 2024-06-13T21:55:44.002596Z  INFO storage::content_manager::toc::collection_meta_ops: Creating collection books    
2024-06-13 17:55:44 2024-06-13T21:55:44.531031Z  INFO actix_web::middleware::logger: 172.20.0.1 "PUT /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.528719    
2024-06-13 17:56:37 2024-06-13T21:56:37.508353Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 17:56:37 2024-06-13T21:56:37.597872Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 70 "-" "python-httpx/0.27.0" 0.090293    
2024-06-13 17:56:37 2024-06-13T21:56:37.609832Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 82 "-" "python-httpx/0.27.0" 0.003358    
2024-06-13 17:56:38 2024-06-13T21:56:38.317586Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 17:56:38 2024-06-13T21:56:38.387888Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 72 "-" "python-httpx/0.27.0" 0.070900    
2024-06-13 17:56:38 2024-06-13T21:56:38.702882Z  INFO storage::content_manager::toc::collection_meta_ops: Creating collection books    
2024-06-13 17:56:40 2024-06-13T21:56:40.312308Z  INFO actix_web::middleware::logger: 172.20.0.1 "PUT /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 1.623730    
2024-06-13 17:59:44 2024-06-13T21:59:44.702719Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 17:59:44 2024-06-13T21:59:44.832513Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.140717    
2024-06-13 17:59:44 2024-06-13T21:59:44.848949Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 83 "-" "python-httpx/0.27.0" 0.005130    
2024-06-13 17:59:44 2024-06-13T21:59:44.856817Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 17:59:44 2024-06-13T21:59:44.859940Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.003424    
2024-06-13 17:59:44 2024-06-13T21:59:44.864459Z  INFO storage::content_manager::toc::collection_meta_ops: Creating collection books    
2024-06-13 17:59:45 2024-06-13T21:59:45.513866Z  INFO actix_web::middleware::logger: 172.20.0.1 "PUT /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.649649    
2024-06-13 18:04:43 2024-06-13T22:04:43.052928Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 18:04:43 2024-06-13T22:04:43.182811Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.152471    
2024-06-13 18:04:43 2024-06-13T22:04:43.190457Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 83 "-" "python-httpx/0.27.0" 0.002015    
2024-06-13 18:04:43 2024-06-13T22:04:43.196306Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 18:04:43 2024-06-13T22:04:43.198407Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 72 "-" "python-httpx/0.27.0" 0.002577    
2024-06-13 18:04:43 2024-06-13T22:04:43.203590Z  INFO storage::content_manager::toc::collection_meta_ops: Creating collection books    
2024-06-13 18:04:43 2024-06-13T22:04:43.620165Z  INFO actix_web::middleware::logger: 172.20.0.1 "PUT /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.416783    
2024-06-13 18:11:50 2024-06-13T22:11:50.711431Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 18:11:50 2024-06-13T22:11:50.843738Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.140486    
2024-06-13 18:11:50 2024-06-13T22:11:50.851964Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 83 "-" "python-httpx/0.27.0" 0.002408    
2024-06-13 18:11:50 2024-06-13T22:11:50.856961Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 18:11:50 2024-06-13T22:11:50.858969Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 72 "-" "python-httpx/0.27.0" 0.002444    
2024-06-13 18:11:50 2024-06-13T22:11:50.864572Z  INFO storage::content_manager::toc::collection_meta_ops: Creating collection books    
2024-06-13 18:11:51 2024-06-13T22:11:51.364184Z  INFO actix_web::middleware::logger: 172.20.0.1 "PUT /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.500737    
2024-06-13 18:12:51 2024-06-13T22:12:51.200082Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 18:12:51 2024-06-13T22:12:51.303334Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.104321    
2024-06-13 18:12:51 2024-06-13T22:12:51.310894Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 83 "-" "python-httpx/0.27.0" 0.001150    
2024-06-13 18:12:51 2024-06-13T22:12:51.315531Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 18:12:51 2024-06-13T22:12:51.317963Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 70 "-" "python-httpx/0.27.0" 0.002570    
2024-06-13 18:12:51 2024-06-13T22:12:51.321910Z  INFO storage::content_manager::toc::collection_meta_ops: Creating collection books    
2024-06-13 18:12:52 2024-06-13T22:12:52.020940Z  INFO actix_web::middleware::logger: 172.20.0.1 "PUT /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.699365    
2024-06-13 18:13:37 2024-06-13T22:13:37.893748Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 18:13:38 2024-06-13T22:13:38.016099Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.123342    
2024-06-13 18:13:38 2024-06-13T22:13:38.022252Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 83 "-" "python-httpx/0.27.0" 0.000773    
2024-06-13 18:13:38 2024-06-13T22:13:38.026969Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 18:13:38 2024-06-13T22:13:38.028960Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.002363    
2024-06-13 18:13:38 2024-06-13T22:13:38.034833Z  INFO storage::content_manager::toc::collection_meta_ops: Creating collection books    
2024-06-13 18:13:39 2024-06-13T22:13:39.826391Z  INFO actix_web::middleware::logger: 172.20.0.1 "PUT /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 1.792564    
2024-06-13 18:14:33 2024-06-13T22:14:33.307365Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 18:14:33 2024-06-13T22:14:33.398057Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 69 "-" "python-httpx/0.27.0" 0.091395    
2024-06-13 18:14:33 2024-06-13T22:14:33.403345Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 83 "-" "python-httpx/0.27.0" 0.000827    
2024-06-13 18:14:33 2024-06-13T22:14:33.407118Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 18:14:33 2024-06-13T22:14:33.408305Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 72 "-" "python-httpx/0.27.0" 0.001343    
2024-06-13 18:14:33 2024-06-13T22:14:33.414429Z  INFO storage::content_manager::toc::collection_meta_ops: Creating collection books    
2024-06-13 18:14:33 2024-06-13T22:14:33.797677Z  INFO actix_web::middleware::logger: 172.20.0.1 "PUT /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.383451    
2024-06-13 18:16:16 2024-06-13T22:16:16.434788Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 18:16:16 2024-06-13T22:16:16.568346Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.135419    
2024-06-13 18:16:16 2024-06-13T22:16:16.574683Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 83 "-" "python-httpx/0.27.0" 0.002215    
2024-06-13 18:16:16 2024-06-13T22:16:16.579196Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 18:16:16 2024-06-13T22:16:16.581443Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 72 "-" "python-httpx/0.27.0" 0.002415    
2024-06-13 18:16:16 2024-06-13T22:16:16.585313Z  INFO storage::content_manager::toc::collection_meta_ops: Creating collection books    
2024-06-13 18:16:17 2024-06-13T22:16:17.154415Z  INFO actix_web::middleware::logger: 172.20.0.1 "PUT /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.569465    
2024-06-13 18:19:32 2024-06-13T22:19:32.910993Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 18:19:33 2024-06-13T22:19:33.022981Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.112797    
2024-06-13 18:19:33 2024-06-13T22:19:33.028023Z  INFO actix_web::middleware::logger: 172.20.0.1 "GET /collections/books/exists HTTP/1.1" 200 83 "-" "python-httpx/0.27.0" 0.000660    
2024-06-13 18:19:33 2024-06-13T22:19:33.033710Z  INFO storage::content_manager::toc::collection_meta_ops: Deleting collection books    
2024-06-13 18:19:33 2024-06-13T22:19:33.037563Z  INFO actix_web::middleware::logger: 172.20.0.1 "DELETE /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.005080    
2024-06-13 18:19:33 2024-06-13T22:19:33.047740Z  INFO storage::content_manager::toc::collection_meta_ops: Creating collection books    
2024-06-13 18:19:33 2024-06-13T22:19:33.476858Z  INFO actix_web::middleware::logger: 172.20.0.1 "PUT /collections/books HTTP/1.1" 200 71 "-" "python-httpx/0.27.0" 0.429401    
2024-06-17 10:07:59            _                 _    
2024-06-17 10:07:59   __ _  __| |_ __ __ _ _ __ | |_  
2024-06-17 10:07:59  / _` |/ _` | '__/ _` | '_ \| __|
2024-06-17 10:07:59 | (_| | (_| | | | (_| | | | | |_  
2024-06-17 10:07:59  \__, |\__,_|_|  \__,_|_| |_|\__|
2024-06-17 10:07:59     |_|                           
2024-06-17 10:07:59
2024-06-17 10:07:59 Version: 1.9.4, build: 671cf97b
2024-06-17 10:07:59 Access web UI at http://localhost:6333/dashboard
2024-06-17 10:07:59
2024-06-17 10:07:59 2024-06-17T14:07:59.237330Z  INFO storage::content_manager::consensus::persistent: Loading raft state from ./storage/raft_state.json    
2024-06-17 10:07:59 2024-06-17T14:07:59.266107Z  INFO storage::content_manager::toc: Loading collection: books    
2024-06-17 10:07:59 2024-06-17T14:07:59.373790Z ERROR qdrant::startup: Panic backtrace:
2024-06-17 10:07:59    0: std::backtrace_rs::backtrace::libunwind::trace
2024-06-17 10:07:59              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/../../backtrace/src/backtrace/libunwind.rs:105:5
2024-06-17 10:07:59    1: std::backtrace_rs::backtrace::trace_unsynchronized
2024-06-17 10:07:59              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/../../backtrace/src/backtrace/mod.rs:66:5
2024-06-17 10:07:59    2: std::backtrace::Backtrace::create
2024-06-17 10:07:59              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/backtrace.rs:331:13
2024-06-17 10:07:59    3: qdrant::startup::setup_panic_hook::{{closure}}
2024-06-17 10:07:59    4: <alloc::boxed::Box<F,A> as core::ops::function::Fn<Args>>::call
2024-06-17 10:07:59              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/alloc/src/boxed.rs:2034:9
2024-06-17 10:07:59    5: std::panicking::rust_panic_with_hook
2024-06-17 10:07:59              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/panicking.rs:783:13
2024-06-17 10:07:59    6: std::panicking::begin_panic_handler::{{closure}}
2024-06-17 10:07:59              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/panicking.rs:657:13
2024-06-17 10:07:59    7: std::sys_common::backtrace::__rust_end_short_backtrace
2024-06-17 10:07:59              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/sys_common/backtrace.rs:171:18
2024-06-17 10:07:59    8: rust_begin_unwind
2024-06-17 10:07:59              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/panicking.rs:645:5
2024-06-17 10:07:59    9: core::panicking::panic_fmt
2024-06-17 10:07:59              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/core/src/panicking.rs:72:14
2024-06-17 10:07:59   10: collection::shards::shard_holder::ShardHolder::load_shards::{{closure}}
2024-06-17 10:07:59   11: collection::collection::Collection::load::{{closure}}
2024-06-17 10:07:59   12: storage::content_manager::toc::TableOfContent::new
2024-06-17 10:07:59   13: qdrant::main
2024-06-17 10:07:59   14: std::sys_common::backtrace::__rust_begin_short_backtrace
2024-06-17 10:07:59   15: main
2024-06-17 10:07:59   16: <unknown>
2024-06-17 10:07:59   17: __libc_start_main
2024-06-17 10:07:59   18: _start
2024-06-17 10:07:59     
2024-06-17 10:07:59 2024-06-17T14:07:59.373805Z ERROR qdrant::startup: Panic occurred in file /qdrant/lib/collection/src/shards/replica_set/mod.rs at line 261: Failed to load local shard "./storage/collections/books/0": Service internal error: Wal error: Can't init WAL: Custom { kind: InvalidData, error: "unexpected entry in wal directory: \"./storage/collections/books/0/wal/open-1 2\"" }    
2024-06-17 10:08:00            _                 _    
2024-06-17 10:08:00   __ _  __| |_ __ __ _ _ __ | |_  
2024-06-17 10:08:00  / _` |/ _` | '__/ _` | '_ \| __|
2024-06-17 10:08:00 | (_| | (_| | | | (_| | | | | |_  
2024-06-17 10:08:00  \__, |\__,_|_|  \__,_|_| |_|\__|
2024-06-17 10:08:00     |_|                           
2024-06-17 10:08:00
2024-06-17 10:08:00 Version: 1.9.4, build: 671cf97b
2024-06-17 10:08:00 Access web UI at http://localhost:6333/dashboard
2024-06-17 10:08:00
2024-06-17 10:08:00 2024-06-17T14:08:00.982414Z  INFO storage::content_manager::consensus::persistent: Loading raft state from ./storage/raft_state.json    
2024-06-17 10:08:01 2024-06-17T14:08:01.002580Z  INFO storage::content_manager::toc: Loading collection: books    
2024-06-17 10:08:01 2024-06-17T14:08:01.100056Z ERROR qdrant::startup: Panic backtrace:
2024-06-17 10:08:01    0: std::backtrace_rs::backtrace::libunwind::trace
2024-06-17 10:08:01              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/../../backtrace/src/backtrace/libunwind.rs:105:5
2024-06-17 10:08:01    1: std::backtrace_rs::backtrace::trace_unsynchronized
2024-06-17 10:08:01              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/../../backtrace/src/backtrace/mod.rs:66:5
2024-06-17 10:08:01    2: std::backtrace::Backtrace::create
2024-06-17 10:08:01              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/backtrace.rs:331:13
2024-06-17 10:08:01    3: qdrant::startup::setup_panic_hook::{{closure}}
2024-06-17 10:08:01    4: <alloc::boxed::Box<F,A> as core::ops::function::Fn<Args>>::call
2024-06-17 10:08:01              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/alloc/src/boxed.rs:2034:9
2024-06-17 10:08:01    5: std::panicking::rust_panic_with_hook
2024-06-17 10:08:01              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/panicking.rs:783:13
2024-06-17 10:08:01    6: std::panicking::begin_panic_handler::{{closure}}
2024-06-17 10:08:01              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/panicking.rs:657:13
2024-06-17 10:08:01    7: std::sys_common::backtrace::__rust_end_short_backtrace
2024-06-17 10:08:01              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/sys_common/backtrace.rs:171:18
2024-06-17 10:08:01    8: rust_begin_unwind
2024-06-17 10:08:01              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/panicking.rs:645:5
2024-06-17 10:08:01    9: core::panicking::panic_fmt
2024-06-17 10:08:01              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/core/src/panicking.rs:72:14
2024-06-17 10:08:01   10: collection::shards::shard_holder::ShardHolder::load_shards::{{closure}}
2024-06-17 10:08:01   11: collection::collection::Collection::load::{{closure}}
2024-06-17 10:08:01   12: storage::content_manager::toc::TableOfContent::new
2024-06-17 10:08:01   13: qdrant::main
2024-06-17 10:08:01   14: std::sys_common::backtrace::__rust_begin_short_backtrace
2024-06-17 10:08:01   15: main
2024-06-17 10:08:01   16: <unknown>
2024-06-17 10:08:01   17: __libc_start_main
2024-06-17 10:08:01   18: _start
2024-06-17 10:08:01     
2024-06-17 10:08:01 2024-06-17T14:08:01.100564Z ERROR qdrant::startup: Panic occurred in file /qdrant/lib/collection/src/shards/replica_set/mod.rs at line 261: Failed to load local shard "./storage/collections/books/0": Service internal error: Wal error: Can't init WAL: Custom { kind: InvalidData, error: "unexpected entry in wal directory: \"./storage/collections/books/0/wal/open-1 2\"" }    
2024-06-17 10:08:01            _                 _    
2024-06-17 10:08:01   __ _  __| |_ __ __ _ _ __ | |_  
2024-06-17 10:08:01  / _` |/ _` | '__/ _` | '_ \| __|
2024-06-17 10:08:01 | (_| | (_| | | | (_| | | | | |_  
2024-06-17 10:08:01  \__, |\__,_|_|  \__,_|_| |_|\__|
2024-06-17 10:08:01     |_|                           
2024-06-17 10:08:01
2024-06-17 10:08:01 Version: 1.9.4, build: 671cf97b
2024-06-17 10:08:01 Access web UI at http://localhost:6333/dashboard
2024-06-17 10:08:01
2024-06-17 10:08:01 2024-06-17T14:08:01.825950Z  INFO storage::content_manager::consensus::persistent: Loading raft state from ./storage/raft_state.json    
2024-06-17 10:08:01 2024-06-17T14:08:01.840735Z  INFO storage::content_manager::toc: Loading collection: books    
2024-06-17 10:08:01 2024-06-17T14:08:01.910162Z ERROR qdrant::startup: Panic backtrace:
2024-06-17 10:08:01    0: std::backtrace_rs::backtrace::libunwind::trace
2024-06-17 10:08:01              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/../../backtrace/src/backtrace/libunwind.rs:105:5
2024-06-17 10:08:01    1: std::backtrace_rs::backtrace::trace_unsynchronized
2024-06-17 10:08:01              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/../../backtrace/src/backtrace/mod.rs:66:5
2024-06-17 10:08:01    2: std::backtrace::Backtrace::create
2024-06-17 10:08:01              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/backtrace.rs:331:13
2024-06-17 10:08:01    3: qdrant::startup::setup_panic_hook::{{closure}}
2024-06-17 10:08:01    4: <alloc::boxed::Box<F,A> as core::ops::function::Fn<Args>>::call
2024-06-17 10:08:01              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/alloc/src/boxed.rs:2034:9
2024-06-17 10:08:01    5: std::panicking::rust_panic_with_hook
2024-06-17 10:08:01              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/panicking.rs:783:13
2024-06-17 10:08:01    6: std::panicking::begin_panic_handler::{{closure}}
2024-06-17 10:08:01              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/panicking.rs:657:13
2024-06-17 10:08:01    7: std::sys_common::backtrace::__rust_end_short_backtrace
2024-06-17 10:08:01              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/sys_common/backtrace.rs:171:18
2024-06-17 10:08:01    8: rust_begin_unwind
2024-06-17 10:08:01              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/panicking.rs:645:5
2024-06-17 10:08:01    9: core::panicking::panic_fmt
2024-06-17 10:08:01              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/core/src/panicking.rs:72:14
2024-06-17 10:08:01   10: collection::shards::shard_holder::ShardHolder::load_shards::{{closure}}
2024-06-17 10:08:01   11: collection::collection::Collection::load::{{closure}}
2024-06-17 10:08:01   12: storage::content_manager::toc::TableOfContent::new
2024-06-17 10:08:01   13: qdrant::main
2024-06-17 10:08:01   14: std::sys_common::backtrace::__rust_begin_short_backtrace
2024-06-17 10:08:01   15: main
2024-06-17 10:08:01   16: <unknown>
2024-06-17 10:08:01   17: __libc_start_main
2024-06-17 10:08:01   18: _start
2024-06-17 10:08:01     
2024-06-17 10:08:01 2024-06-17T14:08:01.910463Z ERROR qdrant::startup: Panic occurred in file /qdrant/lib/collection/src/shards/replica_set/mod.rs at line 261: Failed to load local shard "./storage/collections/books/0": Service internal error: Wal error: Can't init WAL: Custom { kind: InvalidData, error: "unexpected entry in wal directory: \"./storage/collections/books/0/wal/open-1 2\"" }    
2024-06-17 10:08:02            _                 _    
2024-06-17 10:08:02   __ _  __| |_ __ __ _ _ __ | |_  
2024-06-17 10:08:02  / _` |/ _` | '__/ _` | '_ \| __|
2024-06-17 10:08:02 | (_| | (_| | | | (_| | | | | |_  
2024-06-17 10:08:02  \__, |\__,_|_|  \__,_|_| |_|\__|
2024-06-17 10:08:02     |_|                           
2024-06-17 10:08:02
2024-06-17 10:08:02 Version: 1.9.4, build: 671cf97b
2024-06-17 10:08:02 Access web UI at http://localhost:6333/dashboard
2024-06-17 10:08:02
2024-06-17 10:08:02 2024-06-17T14:08:02.882372Z  INFO storage::content_manager::consensus::persistent: Loading raft state from ./storage/raft_state.json    
2024-06-17 10:08:02 2024-06-17T14:08:02.908901Z  INFO storage::content_manager::toc: Loading collection: books    
2024-06-17 10:08:02 2024-06-17T14:08:02.995102Z ERROR qdrant::startup: Panic backtrace:
2024-06-17 10:08:02    0: std::backtrace_rs::backtrace::libunwind::trace
2024-06-17 10:08:02              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/../../backtrace/src/backtrace/libunwind.rs:105:5
2024-06-17 10:08:02    1: std::backtrace_rs::backtrace::trace_unsynchronized
2024-06-17 10:08:02              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/../../backtrace/src/backtrace/mod.rs:66:5
2024-06-17 10:08:02    2: std::backtrace::Backtrace::create
2024-06-17 10:08:02              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/backtrace.rs:331:13
2024-06-17 10:08:02    3: qdrant::startup::setup_panic_hook::{{closure}}
2024-06-17 10:08:02    4: <alloc::boxed::Box<F,A> as core::ops::function::Fn<Args>>::call
2024-06-17 10:08:02              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/alloc/src/boxed.rs:2034:9
2024-06-17 10:08:02    5: std::panicking::rust_panic_with_hook
2024-06-17 10:08:02              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/panicking.rs:783:13
2024-06-17 10:08:02    6: std::panicking::begin_panic_handler::{{closure}}
2024-06-17 10:08:02              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/panicking.rs:657:13
2024-06-17 10:08:02    7: std::sys_common::backtrace::__rust_end_short_backtrace
2024-06-17 10:08:02              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/sys_common/backtrace.rs:171:18
2024-06-17 10:08:02    8: rust_begin_unwind
2024-06-17 10:08:02              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/panicking.rs:645:5
2024-06-17 10:08:02    9: core::panicking::panic_fmt
2024-06-17 10:08:02              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/core/src/panicking.rs:72:14
2024-06-17 10:08:02   10: collection::shards::shard_holder::ShardHolder::load_shards::{{closure}}
2024-06-17 10:08:02   11: collection::collection::Collection::load::{{closure}}
2024-06-17 10:08:02   12: storage::content_manager::toc::TableOfContent::new
2024-06-17 10:08:02   13: qdrant::main
2024-06-17 10:08:02   14: std::sys_common::backtrace::__rust_begin_short_backtrace
2024-06-17 10:08:02   15: main
2024-06-17 10:08:02   16: <unknown>
2024-06-17 10:08:02   17: __libc_start_main
2024-06-17 10:08:02   18: _start
2024-06-17 10:08:02     
2024-06-17 10:08:02 2024-06-17T14:08:02.995185Z ERROR qdrant::startup: Panic occurred in file /qdrant/lib/collection/src/shards/replica_set/mod.rs at line 261: Failed to load local shard "./storage/collections/books/0": Service internal error: Wal error: Can't init WAL: Custom { kind: InvalidData, error: "unexpected entry in wal directory: \"./storage/collections/books/0/wal/open-1 2\"" }    
2024-06-17 10:08:04            _                 _    
2024-06-17 10:08:04   __ _  __| |_ __ __ _ _ __ | |_  
2024-06-17 10:08:04  / _` |/ _` | '__/ _` | '_ \| __|
2024-06-17 10:08:04 | (_| | (_| | | | (_| | | | | |_  
2024-06-17 10:08:04  \__, |\__,_|_|  \__,_|_| |_|\__|
2024-06-17 10:08:04     |_|                           
2024-06-17 10:08:04
2024-06-17 10:08:04 Version: 1.9.4, build: 671cf97b
2024-06-17 10:08:04 Access web UI at http://localhost:6333/dashboard
2024-06-17 10:08:04
2024-06-17 10:08:04 2024-06-17T14:08:04.246805Z  INFO storage::content_manager::consensus::persistent: Loading raft state from ./storage/raft_state.json    
2024-06-17 10:08:04 2024-06-17T14:08:04.285961Z  INFO storage::content_manager::toc: Loading collection: books    
2024-06-17 10:08:04 2024-06-17T14:08:04.356449Z ERROR qdrant::startup: Panic backtrace:
2024-06-17 10:08:04    0: std::backtrace_rs::backtrace::libunwind::trace
2024-06-17 10:08:04              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/../../backtrace/src/backtrace/libunwind.rs:105:5
2024-06-17 10:08:04    1: std::backtrace_rs::backtrace::trace_unsynchronized
2024-06-17 10:08:04              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/../../backtrace/src/backtrace/mod.rs:66:5
2024-06-17 10:08:04    2: std::backtrace::Backtrace::create
2024-06-17 10:08:04              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/backtrace.rs:331:13
2024-06-17 10:08:04    3: qdrant::startup::setup_panic_hook::{{closure}}
2024-06-17 10:08:04    4: <alloc::boxed::Box<F,A> as core::ops::function::Fn<Args>>::call
2024-06-17 10:08:04              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/alloc/src/boxed.rs:2034:9
2024-06-17 10:08:04    5: std::panicking::rust_panic_with_hook
2024-06-17 10:08:04              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/panicking.rs:783:13
2024-06-17 10:08:04    6: std::panicking::begin_panic_handler::{{closure}}
2024-06-17 10:08:04              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/panicking.rs:657:13
2024-06-17 10:08:04    7: std::sys_common::backtrace::__rust_end_short_backtrace
2024-06-17 10:08:04              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/sys_common/backtrace.rs:171:18
2024-06-17 10:08:04    8: rust_begin_unwind
2024-06-17 10:08:04              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/panicking.rs:645:5
2024-06-17 10:08:04    9: core::panicking::panic_fmt
2024-06-17 10:08:04              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/core/src/panicking.rs:72:14
2024-06-17 10:08:04   10: collection::shards::shard_holder::ShardHolder::load_shards::{{closure}}
2024-06-17 10:08:04   11: collection::collection::Collection::load::{{closure}}
2024-06-17 10:08:04   12: storage::content_manager::toc::TableOfContent::new
2024-06-17 10:08:04   13: qdrant::main
2024-06-17 10:08:04   14: std::sys_common::backtrace::__rust_begin_short_backtrace
2024-06-17 10:08:04   15: main
2024-06-17 10:08:04   16: <unknown>
2024-06-17 10:08:04   17: __libc_start_main
2024-06-17 10:08:04   18: _start
2024-06-17 10:08:04     
2024-06-17 10:08:04 2024-06-17T14:08:04.356462Z ERROR qdrant::startup: Panic occurred in file /qdrant/lib/collection/src/shards/replica_set/mod.rs at line 261: Failed to load local shard "./storage/collections/books/0": Service internal error: Wal error: Can't init WAL: Custom { kind: InvalidData, error: "unexpected entry in wal directory: \"./storage/collections/books/0/wal/open-1 2\"" }    
2024-06-17 10:08:07            _                 _    
2024-06-17 10:08:07   __ _  __| |_ __ __ _ _ __ | |_  
2024-06-17 10:08:07  / _` |/ _` | '__/ _` | '_ \| __|
2024-06-17 10:08:07 | (_| | (_| | | | (_| | | | | |_  
2024-06-17 10:08:07  \__, |\__,_|_|  \__,_|_| |_|\__|
2024-06-17 10:08:07     |_|                           
2024-06-17 10:08:07
2024-06-17 10:08:07 Version: 1.9.4, build: 671cf97b
2024-06-17 10:08:07 Access web UI at http://localhost:6333/dashboard
2024-06-17 10:08:07
2024-06-17 10:08:07 2024-06-17T14:08:07.234846Z  INFO storage::content_manager::consensus::persistent: Loading raft state from ./storage/raft_state.json    
2024-06-17 10:08:07 2024-06-17T14:08:07.258209Z  INFO storage::content_manager::toc: Loading collection: books    
2024-06-17 10:08:07 2024-06-17T14:08:07.314540Z ERROR qdrant::startup: Panic backtrace:
2024-06-17 10:08:07    0: std::backtrace_rs::backtrace::libunwind::trace
2024-06-17 10:08:07              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/../../backtrace/src/backtrace/libunwind.rs:105:5
2024-06-17 10:08:07    1: std::backtrace_rs::backtrace::trace_unsynchronized
2024-06-17 10:08:07              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/../../backtrace/src/backtrace/mod.rs:66:5
2024-06-17 10:08:07    2: std::backtrace::Backtrace::create
2024-06-17 10:08:07              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/backtrace.rs:331:13
2024-06-17 10:08:07    3: qdrant::startup::setup_panic_hook::{{closure}}
2024-06-17 10:08:07    4: <alloc::boxed::Box<F,A> as core::ops::function::Fn<Args>>::call
2024-06-17 10:08:07              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/alloc/src/boxed.rs:2034:9
2024-06-17 10:08:07    5: std::panicking::rust_panic_with_hook
2024-06-17 10:08:07              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/panicking.rs:783:13
2024-06-17 10:08:07    6: std::panicking::begin_panic_handler::{{closure}}
2024-06-17 10:08:07              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/panicking.rs:657:13
2024-06-17 10:08:07    7: std::sys_common::backtrace::__rust_end_short_backtrace
2024-06-17 10:08:07              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/sys_common/backtrace.rs:171:18
2024-06-17 10:08:07    8: rust_begin_unwind
2024-06-17 10:08:07              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/panicking.rs:645:5
2024-06-17 10:08:07    9: core::panicking::panic_fmt
2024-06-17 10:08:07              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/core/src/panicking.rs:72:14
2024-06-17 10:08:07   10: collection::shards::shard_holder::ShardHolder::load_shards::{{closure}}
2024-06-17 10:08:07   11: collection::collection::Collection::load::{{closure}}
2024-06-17 10:08:07   12: storage::content_manager::toc::TableOfContent::new
2024-06-17 10:08:07   13: qdrant::main
2024-06-17 10:08:07   14: std::sys_common::backtrace::__rust_begin_short_backtrace
2024-06-17 10:08:07   15: main
2024-06-17 10:08:07   16: <unknown>
2024-06-17 10:08:07   17: __libc_start_main
2024-06-17 10:08:07   18: _start
2024-06-17 10:08:07     
2024-06-17 10:08:07 2024-06-17T14:08:07.314566Z ERROR qdrant::startup: Panic occurred in file /qdrant/lib/collection/src/shards/replica_set/mod.rs at line 261: Failed to load local shard "./storage/collections/books/0": Service internal error: Wal error: Can't init WAL: Custom { kind: InvalidData, error: "unexpected entry in wal directory: \"./storage/collections/books/0/wal/open-1 2\"" }    
2024-06-17 10:08:10            _                 _    
2024-06-17 10:08:10   __ _  __| |_ __ __ _ _ __ | |_  
2024-06-17 10:08:10  / _` |/ _` | '__/ _` | '_ \| __|
2024-06-17 10:08:10 | (_| | (_| | | | (_| | | | | |_  
2024-06-17 10:08:10  \__, |\__,_|_|  \__,_|_| |_|\__|
2024-06-17 10:08:10     |_|                           
2024-06-17 10:08:10
2024-06-17 10:08:10 Version: 1.9.4, build: 671cf97b
2024-06-17 10:08:10 Access web UI at http://localhost:6333/dashboard
2024-06-17 10:08:10
2024-06-17 10:08:10 2024-06-17T14:08:10.908009Z  INFO storage::content_manager::consensus::persistent: Loading raft state from ./storage/raft_state.json    
2024-06-17 10:08:10 2024-06-17T14:08:10.937104Z  INFO storage::content_manager::toc: Loading collection: books    
2024-06-17 10:08:10 2024-06-17T14:08:10.991609Z ERROR qdrant::startup: Panic backtrace:
2024-06-17 10:08:10    0: std::backtrace_rs::backtrace::libunwind::trace
2024-06-17 10:08:10              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/../../backtrace/src/backtrace/libunwind.rs:105:5
2024-06-17 10:08:10    1: std::backtrace_rs::backtrace::trace_unsynchronized
2024-06-17 10:08:10              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/../../backtrace/src/backtrace/mod.rs:66:5
2024-06-17 10:08:10    2: std::backtrace::Backtrace::create
2024-06-17 10:08:10              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/backtrace.rs:331:13
2024-06-17 10:08:10    3: qdrant::startup::setup_panic_hook::{{closure}}
2024-06-17 10:08:10    4: <alloc::boxed::Box<F,A> as core::ops::function::Fn<Args>>::call
2024-06-17 10:08:10              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/alloc/src/boxed.rs:2034:9
2024-06-17 10:08:10    5: std::panicking::rust_panic_with_hook
2024-06-17 10:08:10              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/panicking.rs:783:13
2024-06-17 10:08:10    6: std::panicking::begin_panic_handler::{{closure}}
2024-06-17 10:08:10              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/panicking.rs:657:13
2024-06-17 10:08:10    7: std::sys_common::backtrace::__rust_end_short_backtrace
2024-06-17 10:08:10              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/sys_common/backtrace.rs:171:18
2024-06-17 10:08:10    8: rust_begin_unwind
2024-06-17 10:08:10              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/panicking.rs:645:5
2024-06-17 10:08:10    9: core::panicking::panic_fmt
2024-06-17 10:08:10              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/core/src/panicking.rs:72:14
2024-06-17 10:08:10   10: collection::shards::shard_holder::ShardHolder::load_shards::{{closure}}
2024-06-17 10:08:10   11: collection::collection::Collection::load::{{closure}}
2024-06-17 10:08:10   12: storage::content_manager::toc::TableOfContent::new
2024-06-17 10:08:10   13: qdrant::main
2024-06-17 10:08:10   14: std::sys_common::backtrace::__rust_begin_short_backtrace
2024-06-17 10:08:10   15: main
2024-06-17 10:08:10   16: <unknown>
2024-06-17 10:08:10   17: __libc_start_main
2024-06-17 10:08:10   18: _start
2024-06-17 10:08:10     
2024-06-17 10:08:10 2024-06-17T14:08:10.991630Z ERROR qdrant::startup: Panic occurred in file /qdrant/lib/collection/src/shards/replica_set/mod.rs at line 261: Failed to load local shard "./storage/collections/books/0": Service internal error: Wal error: Can't init WAL: Custom { kind: InvalidData, error: "unexpected entry in wal directory: \"./storage/collections/books/0/wal/open-1 2\"" }    
2024-06-17 10:08:17            _                 _    
2024-06-17 10:08:17   __ _  __| |_ __ __ _ _ __ | |_  
2024-06-17 10:08:17  / _` |/ _` | '__/ _` | '_ \| __|
2024-06-17 10:08:17 | (_| | (_| | | | (_| | | | | |_  
2024-06-17 10:08:17  \__, |\__,_|_|  \__,_|_| |_|\__|
2024-06-17 10:08:17     |_|                           
2024-06-17 10:08:17
2024-06-17 10:08:17 Version: 1.9.4, build: 671cf97b
2024-06-17 10:08:17 Access web UI at http://localhost:6333/dashboard
2024-06-17 10:08:17
2024-06-17 10:08:17 2024-06-17T14:08:17.858910Z  INFO storage::content_manager::consensus::persistent: Loading raft state from ./storage/raft_state.json    
2024-06-17 10:08:17 2024-06-17T14:08:17.874368Z  INFO storage::content_manager::toc: Loading collection: books    
2024-06-17 10:08:17 2024-06-17T14:08:17.932012Z ERROR qdrant::startup: Panic backtrace:
2024-06-17 10:08:17    0: std::backtrace_rs::backtrace::libunwind::trace
2024-06-17 10:08:17              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/../../backtrace/src/backtrace/libunwind.rs:105:5
2024-06-17 10:08:17    1: std::backtrace_rs::backtrace::trace_unsynchronized
2024-06-17 10:08:17              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/../../backtrace/src/backtrace/mod.rs:66:5
2024-06-17 10:08:17    2: std::backtrace::Backtrace::create
2024-06-17 10:08:17              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/backtrace.rs:331:13
2024-06-17 10:08:17    3: qdrant::startup::setup_panic_hook::{{closure}}
2024-06-17 10:08:17    4: <alloc::boxed::Box<F,A> as core::ops::function::Fn<Args>>::call
2024-06-17 10:08:17              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/alloc/src/boxed.rs:2034:9
2024-06-17 10:08:17    5: std::panicking::rust_panic_with_hook
2024-06-17 10:08:17              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/panicking.rs:783:13
2024-06-17 10:08:17    6: std::panicking::begin_panic_handler::{{closure}}
2024-06-17 10:08:17              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/panicking.rs:657:13
2024-06-17 10:08:17    7: std::sys_common::backtrace::__rust_end_short_backtrace
2024-06-17 10:08:17              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/sys_common/backtrace.rs:171:18
2024-06-17 10:08:17    8: rust_begin_unwind
2024-06-17 10:08:17              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/panicking.rs:645:5
2024-06-17 10:08:17    9: core::panicking::panic_fmt
2024-06-17 10:08:17              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/core/src/panicking.rs:72:14
2024-06-17 10:08:17   10: collection::shards::shard_holder::ShardHolder::load_shards::{{closure}}
2024-06-17 10:08:17   11: collection::collection::Collection::load::{{closure}}
2024-06-17 10:08:17   12: storage::content_manager::toc::TableOfContent::new
2024-06-17 10:08:17   13: qdrant::main
2024-06-17 10:08:17   14: std::sys_common::backtrace::__rust_begin_short_backtrace
2024-06-17 10:08:17   15: main
2024-06-17 10:08:17   16: <unknown>
2024-06-17 10:08:17   17: __libc_start_main
2024-06-17 10:08:17   18: _start
2024-06-17 10:08:17     
2024-06-17 10:08:17 2024-06-17T14:08:17.932034Z ERROR qdrant::startup: Panic occurred in file /qdrant/lib/collection/src/shards/replica_set/mod.rs at line 261: Failed to load local shard "./storage/collections/books/0": Service internal error: Wal error: Can't init WAL: Custom { kind: InvalidData, error: "unexpected entry in wal directory: \"./storage/collections/books/0/wal/open-1 2\"" }    
2024-06-17 10:08:31            _                 _    
2024-06-17 10:08:31   __ _  __| |_ __ __ _ _ __ | |_  
2024-06-17 10:08:31  / _` |/ _` | '__/ _` | '_ \| __|
2024-06-17 10:08:31 | (_| | (_| | | | (_| | | | | |_  
2024-06-17 10:08:31  \__, |\__,_|_|  \__,_|_| |_|\__|
2024-06-17 10:08:31     |_|                           
2024-06-17 10:08:31
2024-06-17 10:08:31 Version: 1.9.4, build: 671cf97b
2024-06-17 10:08:31 Access web UI at http://localhost:6333/dashboard
2024-06-17 10:08:31
2024-06-17 10:08:31 2024-06-17T14:08:31.086516Z  INFO storage::content_manager::consensus::persistent: Loading raft state from ./storage/raft_state.json    
2024-06-17 10:08:31 2024-06-17T14:08:31.092290Z  INFO storage::content_manager::toc: Loading collection: books    
2024-06-17 10:08:31 2024-06-17T14:08:31.129567Z ERROR qdrant::startup: Panic backtrace:
2024-06-17 10:08:31    0: std::backtrace_rs::backtrace::libunwind::trace
2024-06-17 10:08:31              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/../../backtrace/src/backtrace/libunwind.rs:105:5
2024-06-17 10:08:31    1: std::backtrace_rs::backtrace::trace_unsynchronized
2024-06-17 10:08:31              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/../../backtrace/src/backtrace/mod.rs:66:5
2024-06-17 10:08:31    2: std::backtrace::Backtrace::create
2024-06-17 10:08:31              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/backtrace.rs:331:13
2024-06-17 10:08:31    3: qdrant::startup::setup_panic_hook::{{closure}}
2024-06-17 10:08:31    4: <alloc::boxed::Box<F,A> as core::ops::function::Fn<Args>>::call
2024-06-17 10:08:31              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/alloc/src/boxed.rs:2034:9
2024-06-17 10:08:31    5: std::panicking::rust_panic_with_hook
2024-06-17 10:08:31              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/panicking.rs:783:13
2024-06-17 10:08:31    6: std::panicking::begin_panic_handler::{{closure}}
2024-06-17 10:08:31              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/panicking.rs:657:13
2024-06-17 10:08:31    7: std::sys_common::backtrace::__rust_end_short_backtrace
2024-06-17 10:08:31              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/sys_common/backtrace.rs:171:18
2024-06-17 10:08:31    8: rust_begin_unwind
2024-06-17 10:08:31              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/panicking.rs:645:5
2024-06-17 10:08:31    9: core::panicking::panic_fmt
2024-06-17 10:08:31              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/core/src/panicking.rs:72:14
2024-06-17 10:08:31   10: collection::shards::shard_holder::ShardHolder::load_shards::{{closure}}
2024-06-17 10:08:31   11: collection::collection::Collection::load::{{closure}}
2024-06-17 10:08:31   12: storage::content_manager::toc::TableOfContent::new
2024-06-17 10:08:31   13: qdrant::main
2024-06-17 10:08:31   14: std::sys_common::backtrace::__rust_begin_short_backtrace
2024-06-17 10:08:31   15: main
2024-06-17 10:08:31   16: <unknown>
2024-06-17 10:08:31   17: __libc_start_main
2024-06-17 10:08:31   18: _start
2024-06-17 10:08:31     
2024-06-17 10:08:31 2024-06-17T14:08:31.129583Z ERROR qdrant::startup: Panic occurred in file /qdrant/lib/collection/src/shards/replica_set/mod.rs at line 261: Failed to load local shard "./storage/collections/books/0": Service internal error: Wal error: Can't init WAL: Custom { kind: InvalidData, error: "unexpected entry in wal directory: \"./storage/collections/books/0/wal/open-1 2\"" }    
2024-06-17 10:08:57            _                 _    
2024-06-17 10:08:57   __ _  __| |_ __ __ _ _ __ | |_  
2024-06-17 10:08:57  / _` |/ _` | '__/ _` | '_ \| __|
2024-06-17 10:08:57 | (_| | (_| | | | (_| | | | | |_  
2024-06-17 10:08:57  \__, |\__,_|_|  \__,_|_| |_|\__|
2024-06-17 10:08:57     |_|                           
2024-06-17 10:08:57
2024-06-17 10:08:57 Version: 1.9.4, build: 671cf97b
2024-06-17 10:08:57 Access web UI at http://localhost:6333/dashboard
2024-06-17 10:08:57
2024-06-17 10:08:57 2024-06-17T14:08:57.097647Z  INFO storage::content_manager::consensus::persistent: Loading raft state from ./storage/raft_state.json    
2024-06-17 10:08:57 2024-06-17T14:08:57.106876Z  INFO storage::content_manager::toc: Loading collection: books    
2024-06-17 10:08:57 2024-06-17T14:08:57.202941Z ERROR qdrant::startup: Panic backtrace:
2024-06-17 10:08:57    0: std::backtrace_rs::backtrace::libunwind::trace
2024-06-17 10:08:57              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/../../backtrace/src/backtrace/libunwind.rs:105:5
2024-06-17 10:08:57    1: std::backtrace_rs::backtrace::trace_unsynchronized
2024-06-17 10:08:57              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/../../backtrace/src/backtrace/mod.rs:66:5
2024-06-17 10:08:57    2: std::backtrace::Backtrace::create
2024-06-17 10:08:57              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/backtrace.rs:331:13
2024-06-17 10:08:57    3: qdrant::startup::setup_panic_hook::{{closure}}
2024-06-17 10:08:57    4: <alloc::boxed::Box<F,A> as core::ops::function::Fn<Args>>::call
2024-06-17 10:08:57              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/alloc/src/boxed.rs:2034:9
2024-06-17 10:08:57    5: std::panicking::rust_panic_with_hook
2024-06-17 10:08:57              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/panicking.rs:783:13
2024-06-17 10:08:57    6: std::panicking::begin_panic_handler::{{closure}}
2024-06-17 10:08:57              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/panicking.rs:657:13
2024-06-17 10:08:57    7: std::sys_common::backtrace::__rust_end_short_backtrace
2024-06-17 10:08:57              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/sys_common/backtrace.rs:171:18
2024-06-17 10:08:57    8: rust_begin_unwind
2024-06-17 10:08:57              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/panicking.rs:645:5
2024-06-17 10:08:57    9: core::panicking::panic_fmt
2024-06-17 10:08:57              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/core/src/panicking.rs:72:14
2024-06-17 10:08:57   10: collection::shards::shard_holder::ShardHolder::load_shards::{{closure}}
2024-06-17 10:08:57   11: collection::collection::Collection::load::{{closure}}
2024-06-17 10:08:57   12: storage::content_manager::toc::TableOfContent::new
2024-06-17 10:08:57   13: qdrant::main
2024-06-17 10:08:57   14: std::sys_common::backtrace::__rust_begin_short_backtrace
2024-06-17 10:08:57   15: main
2024-06-17 10:08:57   16: <unknown>
2024-06-17 10:08:57   17: __libc_start_main
2024-06-17 10:08:57   18: _start
2024-06-17 10:08:57     
2024-06-17 10:08:57 2024-06-17T14:08:57.202991Z ERROR qdrant::startup: Panic occurred in file /qdrant/lib/collection/src/shards/replica_set/mod.rs at line 261: Failed to load local shard "./storage/collections/books/0": Service internal error: Wal error: Can't init WAL: Custom { kind: InvalidData, error: "unexpected entry in wal directory: \"./storage/collections/books/0/wal/open-1 2\"" }    
2024-06-17 10:09:38            _                 _    
2024-06-17 10:09:38   __ _  __| |_ __ __ _ _ __ | |_  
2024-06-17 10:09:38  / _` |/ _` | '__/ _` | '_ \| __|
2024-06-17 10:09:38 | (_| | (_| | | | (_| | | | | |_  
2024-06-17 10:09:38  \__, |\__,_|_|  \__,_|_| |_|\__|
2024-06-17 10:09:38     |_|                           
2024-06-17 10:09:38
2024-06-17 10:09:38 Version: 1.9.4, build: 671cf97b
2024-06-17 10:09:38 Access web UI at http://localhost:6333/dashboard
2024-06-17 10:09:38
2024-06-17 10:09:38 2024-06-17T14:09:38.282813Z  INFO storage::content_manager::consensus::persistent: Loading raft state from ./storage/raft_state.json    
2024-06-17 10:09:38 2024-06-17T14:09:38.300484Z  INFO storage::content_manager::toc: Loading collection: books    
2024-06-17 10:09:38 2024-06-17T14:09:38.358819Z ERROR qdrant::startup: Panic backtrace:
2024-06-17 10:09:38    0: std::backtrace_rs::backtrace::libunwind::trace
2024-06-17 10:09:38              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/../../backtrace/src/backtrace/libunwind.rs:105:5
2024-06-17 10:09:38    1: std::backtrace_rs::backtrace::trace_unsynchronized
2024-06-17 10:09:38              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/../../backtrace/src/backtrace/mod.rs:66:5
2024-06-17 10:09:38    2: std::backtrace::Backtrace::create
2024-06-17 10:09:38              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/backtrace.rs:331:13
2024-06-17 10:09:38    3: qdrant::startup::setup_panic_hook::{{closure}}
2024-06-17 10:09:38    4: <alloc::boxed::Box<F,A> as core::ops::function::Fn<Args>>::call
2024-06-17 10:09:38              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/alloc/src/boxed.rs:2034:9
2024-06-17 10:09:38    5: std::panicking::rust_panic_with_hook
2024-06-17 10:09:38              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/panicking.rs:783:13
2024-06-17 10:09:38    6: std::panicking::begin_panic_handler::{{closure}}
2024-06-17 10:09:38              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/panicking.rs:657:13
2024-06-17 10:09:38    7: std::sys_common::backtrace::__rust_end_short_backtrace
2024-06-17 10:09:38              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/sys_common/backtrace.rs:171:18
2024-06-17 10:09:38    8: rust_begin_unwind
2024-06-17 10:09:38              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/panicking.rs:645:5
2024-06-17 10:09:38    9: core::panicking::panic_fmt
2024-06-17 10:09:38              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/core/src/panicking.rs:72:14
2024-06-17 10:09:38   10: collection::shards::shard_holder::ShardHolder::load_shards::{{closure}}
2024-06-17 10:09:38   11: collection::collection::Collection::load::{{closure}}
2024-06-17 10:09:38   12: storage::content_manager::toc::TableOfContent::new
2024-06-17 10:09:38   13: qdrant::main
2024-06-17 10:09:38   14: std::sys_common::backtrace::__rust_begin_short_backtrace
2024-06-17 10:09:38   15: main
2024-06-17 10:09:38   16: <unknown>
2024-06-17 10:09:38   17: __libc_start_main
2024-06-17 10:09:38   18: _start
2024-06-17 10:09:38     
2024-06-17 10:09:38 2024-06-17T14:09:38.358841Z ERROR qdrant::startup: Panic occurred in file /qdrant/lib/collection/src/shards/replica_set/mod.rs at line 261: Failed to load local shard "./storage/collections/books/0": Service internal error: Wal error: Can't init WAL: Custom { kind: InvalidData, error: "unexpected entry in wal directory: \"./storage/collections/books/0/wal/open-1 2\"" }    
2024-06-17 10:09:38            _                 _    
2024-06-17 10:09:38   __ _  __| |_ __ __ _ _ __ | |_  
2024-06-17 10:09:38  / _` |/ _` | '__/ _` | '_ \| __|
2024-06-17 10:09:38 | (_| | (_| | | | (_| | | | | |_  
2024-06-17 10:09:38  \__, |\__,_|_|  \__,_|_| |_|\__|
2024-06-17 10:09:38     |_|                           
2024-06-17 10:09:38
2024-06-17 10:09:38 Version: 1.9.4, build: 671cf97b
2024-06-17 10:09:38 Access web UI at http://localhost:6333/dashboard
2024-06-17 10:09:38
2024-06-17 10:09:38 2024-06-17T14:09:38.849452Z  INFO storage::content_manager::consensus::persistent: Loading raft state from ./storage/raft_state.json    
2024-06-17 10:09:38 2024-06-17T14:09:38.860804Z  INFO storage::content_manager::toc: Loading collection: books    
2024-06-17 10:09:38 2024-06-17T14:09:38.897247Z ERROR qdrant::startup: Panic backtrace:
2024-06-17 10:09:38    0: std::backtrace_rs::backtrace::libunwind::trace
2024-06-17 10:09:38              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/../../backtrace/src/backtrace/libunwind.rs:105:5
2024-06-17 10:09:38    1: std::backtrace_rs::backtrace::trace_unsynchronized
2024-06-17 10:09:38              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/../../backtrace/src/backtrace/mod.rs:66:5
2024-06-17 10:09:38    2: std::backtrace::Backtrace::create
2024-06-17 10:09:38              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/backtrace.rs:331:13
2024-06-17 10:09:38    3: qdrant::startup::setup_panic_hook::{{closure}}
2024-06-17 10:09:38    4: <alloc::boxed::Box<F,A> as core::ops::function::Fn<Args>>::call
2024-06-17 10:09:38              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/alloc/src/boxed.rs:2034:9
2024-06-17 10:09:38    5: std::panicking::rust_panic_with_hook
2024-06-17 10:09:38              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/panicking.rs:783:13
2024-06-17 10:09:38    6: std::panicking::begin_panic_handler::{{closure}}
2024-06-17 10:09:38              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/panicking.rs:657:13
2024-06-17 10:09:38    7: std::sys_common::backtrace::__rust_end_short_backtrace
2024-06-17 10:09:38              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/sys_common/backtrace.rs:171:18
2024-06-17 10:09:38    8: rust_begin_unwind
2024-06-17 10:09:38              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/panicking.rs:645:5
2024-06-17 10:09:38    9: core::panicking::panic_fmt
2024-06-17 10:09:38              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/core/src/panicking.rs:72:14
2024-06-17 10:09:38   10: collection::shards::shard_holder::ShardHolder::load_shards::{{closure}}
2024-06-17 10:09:38   11: collection::collection::Collection::load::{{closure}}
2024-06-17 10:09:38   12: storage::content_manager::toc::TableOfContent::new
2024-06-17 10:09:38   13: qdrant::main
2024-06-17 10:09:38   14: std::sys_common::backtrace::__rust_begin_short_backtrace
2024-06-17 10:09:38   15: main
2024-06-17 10:09:38   16: <unknown>
2024-06-17 10:09:38   17: __libc_start_main
2024-06-17 10:09:38   18: _start
2024-06-17 10:09:38     
2024-06-17 10:09:38 2024-06-17T14:09:38.897294Z ERROR qdrant::startup: Panic occurred in file /qdrant/lib/collection/src/shards/replica_set/mod.rs at line 261: Failed to load local shard "./storage/collections/books/0": Service internal error: Wal error: Can't init WAL: Custom { kind: InvalidData, error: "unexpected entry in wal directory: \"./storage/collections/books/0/wal/open-1 2\"" }    
2024-06-17 10:09:39            _                 _    
2024-06-17 10:09:39   __ _  __| |_ __ __ _ _ __ | |_  
2024-06-17 10:09:39  / _` |/ _` | '__/ _` | '_ \| __|
2024-06-17 10:09:39 | (_| | (_| | | | (_| | | | | |_  
2024-06-17 10:09:39  \__, |\__,_|_|  \__,_|_| |_|\__|
2024-06-17 10:09:39     |_|                           
2024-06-17 10:09:39
2024-06-17 10:09:39 Version: 1.9.4, build: 671cf97b
2024-06-17 10:09:39 Access web UI at http://localhost:6333/dashboard
2024-06-17 10:09:39
2024-06-17 10:09:39 2024-06-17T14:09:39.419955Z  INFO storage::content_manager::consensus::persistent: Loading raft state from ./storage/raft_state.json    
2024-06-17 10:09:39 2024-06-17T14:09:39.432922Z  INFO storage::content_manager::toc: Loading collection: books    
2024-06-17 10:09:39 2024-06-17T14:09:39.468692Z ERROR qdrant::startup: Panic backtrace:
2024-06-17 10:09:39    0: std::backtrace_rs::backtrace::libunwind::trace
2024-06-17 10:09:39              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/../../backtrace/src/backtrace/libunwind.rs:105:5
2024-06-17 10:09:39    1: std::backtrace_rs::backtrace::trace_unsynchronized
2024-06-17 10:09:39              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/../../backtrace/src/backtrace/mod.rs:66:5
2024-06-17 10:09:39    2: std::backtrace::Backtrace::create
2024-06-17 10:09:39              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/backtrace.rs:331:13
2024-06-17 10:09:39    3: qdrant::startup::setup_panic_hook::{{closure}}
2024-06-17 10:09:39    4: <alloc::boxed::Box<F,A> as core::ops::function::Fn<Args>>::call
2024-06-17 10:09:39              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/alloc/src/boxed.rs:2034:9
2024-06-17 10:09:39    5: std::panicking::rust_panic_with_hook
2024-06-17 10:09:39              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/panicking.rs:783:13
2024-06-17 10:09:39    6: std::panicking::begin_panic_handler::{{closure}}
2024-06-17 10:09:39              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/panicking.rs:657:13
2024-06-17 10:09:39    7: std::sys_common::backtrace::__rust_end_short_backtrace
2024-06-17 10:09:39              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/sys_common/backtrace.rs:171:18
2024-06-17 10:09:39    8: rust_begin_unwind
2024-06-17 10:09:39              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/panicking.rs:645:5
2024-06-17 10:09:39    9: core::panicking::panic_fmt
2024-06-17 10:09:39              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/core/src/panicking.rs:72:14
2024-06-17 10:09:39   10: collection::shards::shard_holder::ShardHolder::load_shards::{{closure}}
2024-06-17 10:09:39   11: collection::collection::Collection::load::{{closure}}
2024-06-17 10:09:39   12: storage::content_manager::toc::TableOfContent::new
2024-06-17 10:09:39   13: qdrant::main
2024-06-17 10:09:39   14: std::sys_common::backtrace::__rust_begin_short_backtrace
2024-06-17 10:09:39   15: main
2024-06-17 10:09:39   16: <unknown>
2024-06-17 10:09:39   17: __libc_start_main
2024-06-17 10:09:39   18: _start
2024-06-17 10:09:39     
2024-06-17 10:09:39 2024-06-17T14:09:39.468939Z ERROR qdrant::startup: Panic occurred in file /qdrant/lib/collection/src/shards/replica_set/mod.rs at line 261: Failed to load local shard "./storage/collections/books/0": Service internal error: Wal error: Can't init WAL: Custom { kind: InvalidData, error: "unexpected entry in wal directory: \"./storage/collections/books/0/wal/open-1 2\"" }    
2024-06-17 10:09:40            _                 _    
2024-06-17 10:09:40   __ _  __| |_ __ __ _ _ __ | |_  
2024-06-17 10:09:40  / _` |/ _` | '__/ _` | '_ \| __|
2024-06-17 10:09:40 | (_| | (_| | | | (_| | | | | |_  
2024-06-17 10:09:40  \__, |\__,_|_|  \__,_|_| |_|\__|
2024-06-17 10:09:40     |_|                           
2024-06-17 10:09:40
2024-06-17 10:09:40 Version: 1.9.4, build: 671cf97b
2024-06-17 10:09:40 Access web UI at http://localhost:6333/dashboard
2024-06-17 10:09:40
2024-06-17 10:09:40 2024-06-17T14:09:40.221680Z  INFO storage::content_manager::consensus::persistent: Loading raft state from ./storage/raft_state.json    
2024-06-17 10:09:40 2024-06-17T14:09:40.234494Z  INFO storage::content_manager::toc: Loading collection: books    
2024-06-17 10:09:40 2024-06-17T14:09:40.270769Z ERROR qdrant::startup: Panic backtrace:
2024-06-17 10:09:40    0: std::backtrace_rs::backtrace::libunwind::trace
2024-06-17 10:09:40              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/../../backtrace/src/backtrace/libunwind.rs:105:5
2024-06-17 10:09:40    1: std::backtrace_rs::backtrace::trace_unsynchronized
2024-06-17 10:09:40              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/../../backtrace/src/backtrace/mod.rs:66:5
2024-06-17 10:09:40    2: std::backtrace::Backtrace::create
2024-06-17 10:09:40              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/backtrace.rs:331:13
2024-06-17 10:09:40    3: qdrant::startup::setup_panic_hook::{{closure}}
2024-06-17 10:09:40    4: <alloc::boxed::Box<F,A> as core::ops::function::Fn<Args>>::call
2024-06-17 10:09:40              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/alloc/src/boxed.rs:2034:9
2024-06-17 10:09:40    5: std::panicking::rust_panic_with_hook
2024-06-17 10:09:40              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/panicking.rs:783:13
2024-06-17 10:09:40    6: std::panicking::begin_panic_handler::{{closure}}
2024-06-17 10:09:40              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/panicking.rs:657:13
2024-06-17 10:09:40    7: std::sys_common::backtrace::__rust_end_short_backtrace
2024-06-17 10:09:40              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/sys_common/backtrace.rs:171:18
2024-06-17 10:09:40    8: rust_begin_unwind
2024-06-17 10:09:40              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/panicking.rs:645:5
2024-06-17 10:09:40    9: core::panicking::panic_fmt
2024-06-17 10:09:40              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/core/src/panicking.rs:72:14
2024-06-17 10:09:40   10: collection::shards::shard_holder::ShardHolder::load_shards::{{closure}}
2024-06-17 10:09:40   11: collection::collection::Collection::load::{{closure}}
2024-06-17 10:09:40   12: storage::content_manager::toc::TableOfContent::new
2024-06-17 10:09:40   13: qdrant::main
2024-06-17 10:09:40   14: std::sys_common::backtrace::__rust_begin_short_backtrace
2024-06-17 10:09:40   15: main
2024-06-17 10:09:40   16: <unknown>
2024-06-17 10:09:40   17: __libc_start_main
2024-06-17 10:09:40   18: _start
2024-06-17 10:09:40     
2024-06-17 10:09:40 2024-06-17T14:09:40.270836Z ERROR qdrant::startup: Panic occurred in file /qdrant/lib/collection/src/shards/replica_set/mod.rs at line 261: Failed to load local shard "./storage/collections/books/0": Service internal error: Wal error: Can't init WAL: Custom { kind: InvalidData, error: "unexpected entry in wal directory: \"./storage/collections/books/0/wal/open-1 2\"" }    
2024-06-17 10:09:41            _                 _    
2024-06-17 10:09:41   __ _  __| |_ __ __ _ _ __ | |_  
2024-06-17 10:09:41  / _` |/ _` | '__/ _` | '_ \| __|
2024-06-17 10:09:41 | (_| | (_| | | | (_| | | | | |_  
2024-06-17 10:09:41  \__, |\__,_|_|  \__,_|_| |_|\__|
2024-06-17 10:09:41     |_|                           
2024-06-17 10:09:41
2024-06-17 10:09:41 Version: 1.9.4, build: 671cf97b
2024-06-17 10:09:41 Access web UI at http://localhost:6333/dashboard
2024-06-17 10:09:41
2024-06-17 10:09:41 2024-06-17T14:09:41.433224Z  INFO storage::content_manager::consensus::persistent: Loading raft state from ./storage/raft_state.json    
2024-06-17 10:09:41 2024-06-17T14:09:41.442845Z  INFO storage::content_manager::toc: Loading collection: books    
2024-06-17 10:09:41 2024-06-17T14:09:41.481541Z ERROR qdrant::startup: Panic backtrace:
2024-06-17 10:09:41    0: std::backtrace_rs::backtrace::libunwind::trace
2024-06-17 10:09:41              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/../../backtrace/src/backtrace/libunwind.rs:105:5
2024-06-17 10:09:41    1: std::backtrace_rs::backtrace::trace_unsynchronized
2024-06-17 10:09:41              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/../../backtrace/src/backtrace/mod.rs:66:5
2024-06-17 10:09:41    2: std::backtrace::Backtrace::create
2024-06-17 10:09:41              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/backtrace.rs:331:13
2024-06-17 10:09:41    3: qdrant::startup::setup_panic_hook::{{closure}}
2024-06-17 10:09:41    4: <alloc::boxed::Box<F,A> as core::ops::function::Fn<Args>>::call
2024-06-17 10:09:41              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/alloc/src/boxed.rs:2034:9
2024-06-17 10:09:41    5: std::panicking::rust_panic_with_hook
2024-06-17 10:09:41              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/panicking.rs:783:13
2024-06-17 10:09:41    6: std::panicking::begin_panic_handler::{{closure}}
2024-06-17 10:09:41              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/panicking.rs:657:13
2024-06-17 10:09:41    7: std::sys_common::backtrace::__rust_end_short_backtrace
2024-06-17 10:09:41              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/sys_common/backtrace.rs:171:18
2024-06-17 10:09:41    8: rust_begin_unwind
2024-06-17 10:09:41              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/panicking.rs:645:5
2024-06-17 10:09:41    9: core::panicking::panic_fmt
2024-06-17 10:09:41              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/core/src/panicking.rs:72:14
2024-06-17 10:09:41   10: collection::shards::shard_holder::ShardHolder::load_shards::{{closure}}
2024-06-17 10:09:41   11: collection::collection::Collection::load::{{closure}}
2024-06-17 10:09:41   12: storage::content_manager::toc::TableOfContent::new
2024-06-17 10:09:41   13: qdrant::main
2024-06-17 10:09:41   14: std::sys_common::backtrace::__rust_begin_short_backtrace
2024-06-17 10:09:41   15: main
2024-06-17 10:09:41   16: <unknown>
2024-06-17 10:09:41   17: __libc_start_main
2024-06-17 10:09:41   18: _start
2024-06-17 10:09:41     
2024-06-17 10:09:41 2024-06-17T14:09:41.481563Z ERROR qdrant::startup: Panic occurred in file /qdrant/lib/collection/src/shards/replica_set/mod.rs at line 261: Failed to load local shard "./storage/collections/books/0": Service internal error: Wal error: Can't init WAL: Custom { kind: InvalidData, error: "unexpected entry in wal directory: \"./storage/collections/books/0/wal/open-1 2\"" }    
2024-06-17 10:09:43            _                 _    
2024-06-17 10:09:43   __ _  __| |_ __ __ _ _ __ | |_  
2024-06-17 10:09:43  / _` |/ _` | '__/ _` | '_ \| __|
2024-06-17 10:09:43 | (_| | (_| | | | (_| | | | | |_  
2024-06-17 10:09:43  \__, |\__,_|_|  \__,_|_| |_|\__|
2024-06-17 10:09:43     |_|                           
2024-06-17 10:09:43
2024-06-17 10:09:43 Version: 1.9.4, build: 671cf97b
2024-06-17 10:09:43 Access web UI at http://localhost:6333/dashboard
2024-06-17 10:09:43
2024-06-17 10:09:43 2024-06-17T14:09:43.430191Z  INFO storage::content_manager::consensus::persistent: Loading raft state from ./storage/raft_state.json    
2024-06-17 10:09:43 2024-06-17T14:09:43.440828Z  INFO storage::content_manager::toc: Loading collection: books    
2024-06-17 10:09:43 2024-06-17T14:09:43.488482Z ERROR qdrant::startup: Panic backtrace:
2024-06-17 10:09:43    0: std::backtrace_rs::backtrace::libunwind::trace
2024-06-17 10:09:43              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/../../backtrace/src/backtrace/libunwind.rs:105:5
2024-06-17 10:09:43    1: std::backtrace_rs::backtrace::trace_unsynchronized
2024-06-17 10:09:43              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/../../backtrace/src/backtrace/mod.rs:66:5
2024-06-17 10:09:43    2: std::backtrace::Backtrace::create
2024-06-17 10:09:43              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/backtrace.rs:331:13
2024-06-17 10:09:43    3: qdrant::startup::setup_panic_hook::{{closure}}
2024-06-17 10:09:43    4: <alloc::boxed::Box<F,A> as core::ops::function::Fn<Args>>::call
2024-06-17 10:09:43              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/alloc/src/boxed.rs:2034:9
2024-06-17 10:09:43    5: std::panicking::rust_panic_with_hook
2024-06-17 10:09:43              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/panicking.rs:783:13
2024-06-17 10:09:43    6: std::panicking::begin_panic_handler::{{closure}}
2024-06-17 10:09:43              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/panicking.rs:657:13
2024-06-17 10:09:43    7: std::sys_common::backtrace::__rust_end_short_backtrace
2024-06-17 10:09:43              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/sys_common/backtrace.rs:171:18
2024-06-17 10:09:43    8: rust_begin_unwind
2024-06-17 10:09:43              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/panicking.rs:645:5
2024-06-17 10:09:43    9: core::panicking::panic_fmt
2024-06-17 10:09:43              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/core/src/panicking.rs:72:14
2024-06-17 10:09:43   10: collection::shards::shard_holder::ShardHolder::load_shards::{{closure}}
2024-06-17 10:09:43   11: collection::collection::Collection::load::{{closure}}
2024-06-17 10:09:43   12: storage::content_manager::toc::TableOfContent::new
2024-06-17 10:09:43   13: qdrant::main
2024-06-17 10:09:43   14: std::sys_common::backtrace::__rust_begin_short_backtrace
2024-06-17 10:09:43   15: main
2024-06-17 10:09:43   16: <unknown>
2024-06-17 10:09:43   17: __libc_start_main
2024-06-17 10:09:43   18: _start
2024-06-17 10:09:43     
2024-06-17 10:09:43 2024-06-17T14:09:43.488500Z ERROR qdrant::startup: Panic occurred in file /qdrant/lib/collection/src/shards/replica_set/mod.rs at line 261: Failed to load local shard "./storage/collections/books/0": Service internal error: Wal error: Can't init WAL: Custom { kind: InvalidData, error: "unexpected entry in wal directory: \"./storage/collections/books/0/wal/open-1 2\"" }    
2024-06-17 10:09:47            _                 _    
2024-06-17 10:09:47   __ _  __| |_ __ __ _ _ __ | |_  
2024-06-17 10:09:47  / _` |/ _` | '__/ _` | '_ \| __|
2024-06-17 10:09:47 | (_| | (_| | | | (_| | | | | |_  
2024-06-17 10:09:47  \__, |\__,_|_|  \__,_|_| |_|\__|
2024-06-17 10:09:47     |_|                           
2024-06-17 10:09:47
2024-06-17 10:09:47 Version: 1.9.4, build: 671cf97b
2024-06-17 10:09:47 Access web UI at http://localhost:6333/dashboard
2024-06-17 10:09:47
2024-06-17 10:09:47 2024-06-17T14:09:47.056746Z  INFO storage::content_manager::consensus::persistent: Loading raft state from ./storage/raft_state.json    
2024-06-17 10:09:47 2024-06-17T14:09:47.068462Z  INFO storage::content_manager::toc: Loading collection: books    
2024-06-17 10:09:47 2024-06-17T14:09:47.106898Z ERROR qdrant::startup: Panic backtrace:
2024-06-17 10:09:47    0: std::backtrace_rs::backtrace::libunwind::trace
2024-06-17 10:09:47              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/../../backtrace/src/backtrace/libunwind.rs:105:5
2024-06-17 10:09:47    1: std::backtrace_rs::backtrace::trace_unsynchronized
2024-06-17 10:09:47              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/../../backtrace/src/backtrace/mod.rs:66:5
2024-06-17 10:09:47    2: std::backtrace::Backtrace::create
2024-06-17 10:09:47              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/backtrace.rs:331:13
2024-06-17 10:09:47    3: qdrant::startup::setup_panic_hook::{{closure}}
2024-06-17 10:09:47    4: <alloc::boxed::Box<F,A> as core::ops::function::Fn<Args>>::call
2024-06-17 10:09:47              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/alloc/src/boxed.rs:2034:9
2024-06-17 10:09:47    5: std::panicking::rust_panic_with_hook
2024-06-17 10:09:47              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/panicking.rs:783:13
2024-06-17 10:09:47    6: std::panicking::begin_panic_handler::{{closure}}
2024-06-17 10:09:47              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/panicking.rs:657:13
2024-06-17 10:09:47    7: std::sys_common::backtrace::__rust_end_short_backtrace
2024-06-17 10:09:47              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/sys_common/backtrace.rs:171:18
2024-06-17 10:09:47    8: rust_begin_unwind
2024-06-17 10:09:47              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/panicking.rs:645:5
2024-06-17 10:09:47    9: core::panicking::panic_fmt
2024-06-17 10:09:47              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/core/src/panicking.rs:72:14
2024-06-17 10:09:47   10: collection::shards::shard_holder::ShardHolder::load_shards::{{closure}}
2024-06-17 10:09:47   11: collection::collection::Collection::load::{{closure}}
2024-06-17 10:09:47   12: storage::content_manager::toc::TableOfContent::new
2024-06-17 10:09:47   13: qdrant::main
2024-06-17 10:09:47   14: std::sys_common::backtrace::__rust_begin_short_backtrace
2024-06-17 10:09:47   15: main
2024-06-17 10:09:47   16: <unknown>
2024-06-17 10:09:47   17: __libc_start_main
2024-06-17 10:09:47   18: _start
2024-06-17 10:09:47     
2024-06-17 10:09:47 2024-06-17T14:09:47.106910Z ERROR qdrant::startup: Panic occurred in file /qdrant/lib/collection/src/shards/replica_set/mod.rs at line 261: Failed to load local shard "./storage/collections/books/0": Service internal error: Wal error: Can't init WAL: Custom { kind: InvalidData, error: "unexpected entry in wal directory: \"./storage/collections/books/0/wal/open-1 2\"" }    
2024-06-17 10:09:53            _                 _    
2024-06-17 10:09:53   __ _  __| |_ __ __ _ _ __ | |_  
2024-06-17 10:09:53  / _` |/ _` | '__/ _` | '_ \| __|
2024-06-17 10:09:53 | (_| | (_| | | | (_| | | | | |_  
2024-06-17 10:09:53  \__, |\__,_|_|  \__,_|_| |_|\__|
2024-06-17 10:09:53     |_|                           
2024-06-17 10:09:53
2024-06-17 10:09:53 Version: 1.9.4, build: 671cf97b
2024-06-17 10:09:53 Access web UI at http://localhost:6333/dashboard
2024-06-17 10:09:53
2024-06-17 10:09:53 2024-06-17T14:09:53.873682Z  INFO storage::content_manager::consensus::persistent: Loading raft state from ./storage/raft_state.json    
2024-06-17 10:09:53 2024-06-17T14:09:53.881520Z  INFO storage::content_manager::toc: Loading collection: books    
2024-06-17 10:09:53 2024-06-17T14:09:53.921681Z ERROR qdrant::startup: Panic backtrace:
2024-06-17 10:09:53    0: std::backtrace_rs::backtrace::libunwind::trace
2024-06-17 10:09:53              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/../../backtrace/src/backtrace/libunwind.rs:105:5
2024-06-17 10:09:53    1: std::backtrace_rs::backtrace::trace_unsynchronized
2024-06-17 10:09:53              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/../../backtrace/src/backtrace/mod.rs:66:5
2024-06-17 10:09:53    2: std::backtrace::Backtrace::create
2024-06-17 10:09:53              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/backtrace.rs:331:13
2024-06-17 10:09:53    3: qdrant::startup::setup_panic_hook::{{closure}}
2024-06-17 10:09:53    4: <alloc::boxed::Box<F,A> as core::ops::function::Fn<Args>>::call
2024-06-17 10:09:53              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/alloc/src/boxed.rs:2034:9
2024-06-17 10:09:53    5: std::panicking::rust_panic_with_hook
2024-06-17 10:09:53              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/panicking.rs:783:13
2024-06-17 10:09:53    6: std::panicking::begin_panic_handler::{{closure}}
2024-06-17 10:09:53              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/panicking.rs:657:13
2024-06-17 10:09:53    7: std::sys_common::backtrace::__rust_end_short_backtrace
2024-06-17 10:09:53              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/sys_common/backtrace.rs:171:18
2024-06-17 10:09:53    8: rust_begin_unwind
2024-06-17 10:09:53              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/panicking.rs:645:5
2024-06-17 10:09:53    9: core::panicking::panic_fmt
2024-06-17 10:09:53              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/core/src/panicking.rs:72:14
2024-06-17 10:09:53   10: collection::shards::shard_holder::ShardHolder::load_shards::{{closure}}
2024-06-17 10:09:53   11: collection::collection::Collection::load::{{closure}}
2024-06-17 10:09:53   12: storage::content_manager::toc::TableOfContent::new
2024-06-17 10:09:53   13: qdrant::main
2024-06-17 10:09:53   14: std::sys_common::backtrace::__rust_begin_short_backtrace
2024-06-17 10:09:53   15: main
2024-06-17 10:09:53   16: <unknown>
2024-06-17 10:09:53   17: __libc_start_main
2024-06-17 10:09:53   18: _start
2024-06-17 10:09:53     
2024-06-17 10:09:53 2024-06-17T14:09:53.921702Z ERROR qdrant::startup: Panic occurred in file /qdrant/lib/collection/src/shards/replica_set/mod.rs at line 261: Failed to load local shard "./storage/collections/books/0": Service internal error: Wal error: Can't init WAL: Custom { kind: InvalidData, error: "unexpected entry in wal directory: \"./storage/collections/books/0/wal/open-1 2\"" }    
2024-06-17 10:10:07            _                 _    
2024-06-17 10:10:07   __ _  __| |_ __ __ _ _ __ | |_  
2024-06-17 10:10:07  / _` |/ _` | '__/ _` | '_ \| __|
2024-06-17 10:10:07 | (_| | (_| | | | (_| | | | | |_  
2024-06-17 10:10:07  \__, |\__,_|_|  \__,_|_| |_|\__|
2024-06-17 10:10:07     |_|                           
2024-06-17 10:10:07
2024-06-17 10:10:07 Version: 1.9.4, build: 671cf97b
2024-06-17 10:10:07 Access web UI at http://localhost:6333/dashboard
2024-06-17 10:10:07
2024-06-17 10:10:07 2024-06-17T14:10:07.139571Z  INFO storage::content_manager::consensus::persistent: Loading raft state from ./storage/raft_state.json    
2024-06-17 10:10:07 2024-06-17T14:10:07.154970Z  INFO storage::content_manager::toc: Loading collection: books    
2024-06-17 10:10:07 2024-06-17T14:10:07.195666Z ERROR qdrant::startup: Panic backtrace:
2024-06-17 10:10:07    0: std::backtrace_rs::backtrace::libunwind::trace
2024-06-17 10:10:07              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/../../backtrace/src/backtrace/libunwind.rs:105:5
2024-06-17 10:10:07    1: std::backtrace_rs::backtrace::trace_unsynchronized
2024-06-17 10:10:07              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/../../backtrace/src/backtrace/mod.rs:66:5
2024-06-17 10:10:07    2: std::backtrace::Backtrace::create
2024-06-17 10:10:07              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/backtrace.rs:331:13
2024-06-17 10:10:07    3: qdrant::startup::setup_panic_hook::{{closure}}
2024-06-17 10:10:07    4: <alloc::boxed::Box<F,A> as core::ops::function::Fn<Args>>::call
2024-06-17 10:10:07              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/alloc/src/boxed.rs:2034:9
2024-06-17 10:10:07    5: std::panicking::rust_panic_with_hook
2024-06-17 10:10:07              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/panicking.rs:783:13
2024-06-17 10:10:07    6: std::panicking::begin_panic_handler::{{closure}}
2024-06-17 10:10:07              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/panicking.rs:657:13
2024-06-17 10:10:07    7: std::sys_common::backtrace::__rust_end_short_backtrace
2024-06-17 10:10:07              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/sys_common/backtrace.rs:171:18
2024-06-17 10:10:07    8: rust_begin_unwind
2024-06-17 10:10:07              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/std/src/panicking.rs:645:5
2024-06-17 10:10:07    9: core::panicking::panic_fmt
2024-06-17 10:10:07              at /rustc/9b00956e56009bab2aa15d7bff10916599e3d6d6/library/core/src/panicking.rs:72:14
2024-06-17 10:10:07   10: collection::shards::shard_holder::ShardHolder::load_shards::{{closure}}
2024-06-17 10:10:07   11: collection::collection::Collection::load::{{closure}}
2024-06-17 10:10:07   12: storage::content_manager::toc::TableOfContent::new
2024-06-17 10:10:07   13: qdrant::main
2024-06-17 10:10:07   14: std::sys_common::backtrace::__rust_begin_short_backtrace
2024-06-17 10:10:07   15: main
2024-06-17 10:10:07   16: <unknown>
2024-06-17 10:10:07   17: __libc_start_main
2024-06-17 10:10:07   18: _start
2024-06-17 10:10:07     
2024-06-17 10:10:07 2024-06-17T14:10:07.195684Z ERROR qdrant::startup: Panic occurred in file /qdrant/lib/collection/src/shards/replica_set/mod.rs at line 261: Failed to load local shard "./storage/collections/books/0": Service internal error: Wal error: Can't init WAL: Custom { kind: InvalidData, error: "unexpected entry in wal directory: \"./storage/collections/books/0/wal/open-1 2\"" }    

```





***
***

*Fails due to painting black realtime*
```
class Solution(object):
    def maxDistance(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """    

        d = 1
        f = 0

        W = water_cells(grid)
        print(W)

        while len(W) > 0:
            for w in W:
                if next_to_land(grid, w):
                    grid[w[0]][w[1]] = 1
                    f = w
            d += 1        
            print("d: " + str(d))        
            pprint.pprint(grid)
            W = water_cells(grid)
            print(len(W) > 0)
        return d

def next_to_land(grid, cell):
    height, width = len(grid), len(grid[0])
    neighs = set()
    r, c = cell[0], cell[1]
    curr = grid[r][c]
    if (r > 0 and grid[r-1][c] == 1):
        return True
    if (r < height - 1 and grid[r+1][c] == 1):
        return True
    if (c > 0 and grid[r][c-1] == 1):
        return True
    if (c < width - 1 and grid[r][c+1] == 1):
        return True
    return False

def water_cells(grid):
    width = len(grid[0])
    height = len(grid)
    water = {(c, r) for c in range(width) for r in range(height)
        if grid[r][c]==0}
    print(type(water))
    print(len(water))
    return water
```

***
***

Final

``` python
class Solution(object):
    def maxDistance(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """
        d = 0
        sea = water_cells(grid)
        height, width = len(grid), len(grid[0])
        if len(sea) in {height * width, 0}:
            return -1

        while len(sea) > 0:
            next_black = set()
            for w in sea:
                if next_to_land(grid, w):
                    next_black.add(w)
            for b in next_black:
                grid[b[0]][b[1]] = 1
            sea = sea - next_black
            d += 1
        return d

def next_to_land(grid, cell):
    height, width = len(grid), len(grid[0])
    r, c = cell[0], cell[1]
    return (r > 0 and grid[r-1][c] == 1) or \
        (r < height - 1 and grid[r+1][c] == 1) or \
        (c > 0 and grid[r][c-1] == 1) or \
        (c < width - 1 and grid[r][c+1] == 1)

def water_cells(grid):
    width = len(grid[0])
    height = len(grid)
    return {(r, c) for c in range(width) for r in range(height)
        if grid[r][c]==0}
```
