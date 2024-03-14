"""Re-export of Bazel rules with repository-wide defaults"""

load("@npm//@angular/build-tooling/bazel/http-server:index.bzl", _http_server = "http_server")

http_server=_http_server
